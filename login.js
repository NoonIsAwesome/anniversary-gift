// === 把 generator.html 產生的 ENTRIES 整段貼到這裡（覆蓋這個空物件） ===
const ENTRIES = {
  // 先空著；請先用 generator.html 產出後貼上
};

// 影片來源（本地或雲端 URL）
const videoSrc = "./video/intro.mp4"; // 若改用雲端，直接填雲端影片 URL

// --- 以下不用改 ---

const nameSelect = document.getElementById("nameSelect");
const codeInput = document.getElementById("codeInput");
const confirmBtn = document.getElementById("confirmBtn");
const msg = document.getElementById("msg");

function b64ToBytes(b64){ return Uint8Array.from(atob(b64), c => c.charCodeAt(0)); }
function bytesToStr(bytes){ return new TextDecoder().decode(bytes); }

async function sha256(bytes){
  const buf = await crypto.subtle.digest("SHA-256", bytes);
  return new Uint8Array(buf);
}

async function deriveKey(code, saltB){
  const keyMaterial = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(code), { name: "PBKDF2" }, false, ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: saltB, iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );
}

async function verifyAndDecryptUrl(name, code){
  const entry = ENTRIES[name];
  if(!entry) throw new Error("name_not_found");

  // 1) 雜湊驗證：h == SHA256(hSalt || code)
  const hSalt = b64ToBytes(entry.auth.hSalt);
  const codeBytes = new TextEncoder().encode(code);
  const concat = new Uint8Array(hSalt.length + codeBytes.length);
  concat.set(hSalt, 0); concat.set(codeBytes, hSalt.length);
  const hCalc = await sha256(concat);
  const hStored = b64ToBytes(entry.auth.h);
  if (hCalc.length !== hStored.length || hCalc.some((v,i) => v !== hStored[i])) {
    throw new Error("bad_code");
  }

  // 2) 解密下載/播放連結
  const salt = b64ToBytes(entry.salt);
  const iv = b64ToBytes(entry.iv);
  const ct = b64ToBytes(entry.ct);
  const key = await deriveKey(code, salt);
  const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ct);
  return bytesToStr(new Uint8Array(pt));
}

confirmBtn.addEventListener("click", async () => {
  msg.textContent = "";
  const name = nameSelect.value.trim();
  const code = codeInput.value.trim();
  if (!name || !code) { msg.textContent = "請選擇姓名並輸入編號"; return; }

  try{
    const audioUrl = await verifyAndDecryptUrl(name, code);

    // 把資訊放到 sessionStorage，帶到第 2 層頁面
    sessionStorage.setItem("fan_name", name);
    sessionStorage.setItem("fan_audio", audioUrl);
    sessionStorage.setItem("fan_video", videoSrc);

    // 跳轉到下一層
    window.location.href = "media.html";
  }catch(e){
    console.error(e);
    msg.textContent = "驗證失敗，請再試一次。";
  }
});
