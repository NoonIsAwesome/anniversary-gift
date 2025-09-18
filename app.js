// === 把 tools/encrypt_map.js 產生的 ENTRIES 貼到這裡（覆蓋此物件） ===
const ENTRIES = {
  "ASHU": {
    "salt": "d/2mbZctPFw7jyYxItafYQ==",
    "iv": "2yiveP+GcNdhcdnT",
    "ct": "z0w27Z1At4/oOYm/Q5xDdMeMAIlsZRNCP+ZBRR9X1IH9KTVvAyfLTGiGMG3bGQg9V9zAoba+w84SR36pyNumi2Tm+t9UkikpXH7P+xf1BJTmSWZPP6jKi3zjse5l3Pter8w=",
    "auth": {
      "hSalt": "3Wh5OthA5Wayo6/YJJfCLg==",
      "h": "d6msFIyO+kFTqAoCJSEFpOkEXBV535e5fNC5UpXbBmM="
    }
  }
};

const videoSrc = "./video/intro.mp4"; // 或換成雲端影片連結

const nameSelect = document.getElementById("nameSelect");
const codeInput = document.getElementById("codeInput");
const confirmBtn = document.getElementById("confirmBtn");
const msg = document.getElementById("msg");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const theVideo = document.getElementById("theVideo");
const downloadLink = document.getElementById("downloadLink");
const backBtn = document.getElementById("backBtn");

function b64ToBytes(b64){ return Uint8Array.from(atob(b64), c => c.charCodeAt(0)); }
function bytesToStr(bytes){ return new TextDecoder().decode(bytes); }
function concatBytes(a, b){
  const out = new Uint8Array(a.length + b.length);
  out.set(a, 0); out.set(b, a.length);
  return out;
}

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

  // 2) 解密下載連結
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
    const url = await verifyAndDecryptUrl(name, code);
    step1.hidden = true; step2.hidden = false;
    theVideo.src = videoSrc;
    downloadLink.href = url;
  }catch(e){
    console.error(e);
    msg.textContent = "驗證失敗，請再試一次。";
  }
});

backBtn.addEventListener("click", () => {
  step2.hidden = true; step1.hidden = false;
  theVideo.pause(); theVideo.src = ""; downloadLink.removeAttribute("href");
});
