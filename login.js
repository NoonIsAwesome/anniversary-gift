const ENTRIES = {
  "レイ": {
    "salt": "wTNL37pbw+eArELeMItLFQ==",
    "iv": "mA/z4r3RDE4xD72P",
    "ct": "uhKujUnX8NuRdn1AC8iSb9JEq3BXIAEij+hTK2t0mnNQKurd7cfSNFi+CLxkKT6pSoqsghhWGF9PF7zWuX3tpmMYkW2UyrxN4+3jF1YpdL2avW1oNdOggUZNaj0kFQBYKUdjyGy3KTKjEAB6IcFEexFT3Rias5jg7vb8DoF5Yg==",
    "auth": {
      "hSalt": "Hqposwb+RckeCOqKfJIBWA==",
      "h": "EE4dISmX6OtyOenIjgnORGU7yo/KC/OCzdk0CqgUrcg="
    }
  },
  "酥酥": {
    "salt": "bO5f4P5tRKVW8cxvQW6jdg==",
    "iv": "EtSPuv+KNsOPXM08",
    "ct": "OlRIbBde3y6x/y5B+dHdefEB2StUyJ4PlMX60+KlD+T9thBFmxlQTOHOHxjOIGIDMMV8NA9+FG4+wG9czT4l2Hs5vvLkov66TdMyBhMbhfD/6vR5k3DFjZYjrBRT2HO6dJtsILwOEEPX3AkfZ29GNPQCQxq45kdy9AzGAowimA==",
    "auth": {
      "hSalt": "fDlLpogModOlZ9FWY6guug==",
      "h": "540RAO2/kAQNLDZMlltaK3XiUJtUvYQLn6PpI36XIh4="
    }
  },
  "千歌": {
    "salt": "cpSoiD/J8rOwBy/aIbi5LQ==",
    "iv": "8PqkgPgEsUi+cOXy",
    "ct": "I8bF3y0GdAjK/UPQSeo0n6j5rtmbbOLhcLkcekI3jOubibWR2vm0f8P/EG1pHXYz/pxPN3/BUOgxXXoSNPMGkPhDFHD5BG339GrW1Iqa30HyvjczjymBM2vAX/+AxKQS9ln2wsvLefM/ZT6DXm0W9lB8d7LIdZ+YV3PnZt6SMQ==",
    "auth": {
      "hSalt": "i8GLMF6AyghuS7YFxOX+2Q==",
      "h": "B7JRoOP2PXq0YIxQ6mf174YoW9Ok9xfJxWHPLwkEnuI="
    }
  },
  "ASHU": {
    "salt": "ApHj+siDe4XlJoQeX3Wcag==",
    "iv": "0l7SrLwfj3RMXaz2",
    "ct": "9gtVQAdJsRI/h0KgrFOnF8lz1Jsd5Bm71DIA8iAchdLWHKbt8XIBnZ6edzfSKHj2sjxi27J0F7bfQcVsbzpNjg4hLIYo8+rOTgM2UDhSokcf+BicNqr6ADVKbR8jBOeVC/cvcDMbbKzNc8MVew3W4H9mnRHnM7oj67uiTmIMpP5g77A=",
    "auth": {
      "hSalt": "iRoZKIZ3cNGGq2ybrrVVog==",
      "h": "2V1cPCYI6QZuuhLf+ko3tXvCqkrfuq+L7FY2VNwfpNc="
    }
  },
  "焦焦": {
    "salt": "kKxa0Z6eQlJ9LhIz2ijNGg==",
    "iv": "GcAMvYohd+9mxE8u",
    "ct": "RNJPH9sLjNs9E7N/fcQDHF13ytdOeAP4FZYM3kxs1HsBJOrwOr8lVQ6R2Gv9h70zdjlPdKw/wUc3yE5BGSOpHR5XD7WzEUiSp0sP7zyKwCbIE6GA1qeVQWj9y2C4jmrd6UX3KYNvw2eW6nQv4cp/wsiKXNohQGJnJlkEyUYnWw==",
    "auth": {
      "hSalt": "REZGpvP5qvlTA0hihdBF0A==",
      "h": "ot5jJyV5YrRP9xbpljEe6SpuBShBzvU3pHIr2sCJYyo="
    }
  },
  "林小布": {
    "salt": "kfeNpYpEMhHUONEutKNR+w==",
    "iv": "Ve/Xnv4zx9pOQkJ6",
    "ct": "uPiNWAeqnmiq7nQRz7gw3xfUBKoRwchQ86CsdxP4QZSJCmHHZwBKzXBspOkYkLIdIBC9sX5aJthj0UmmhXsq8eDE+3vsIVuD42A0ZqOCmW4rx1JTbEy7Yx0cc9xFHFiMdp+Zaxa5KB/CpDmUhVsh2EWbVXRo6ngpMHhvEW72nA==",
    "auth": {
      "hSalt": "OGoYcfw5rW0MOa/zIG6e3Q==",
      "h": "0mi7q9rmOOv65ANqQpKVzGIP37C8/04T5suCg6NQ6e8="
    }
  },
  "冬瓜": {
    "salt": "HoZNwPa6o9+Sa9BTWaKs7w==",
    "iv": "mh6VmMEp96XlKDEE",
    "ct": "xTk1hJzlNlji/UJmu2sOQcvA0xzdRmDKX9P/X3o57VJqxRHrQNpt87ODOU743L6QcNfCvlgno9kKLcGRcayxf9MIs4tJU/u4jKRY6f39NTUX0C7g5AP83HJ+NZFa/lPsVypRky786/ynmZ5ioY2Q6EmCu6An4XSypU2CmKU/9Q==",
    "auth": {
      "hSalt": "vtKLtUHANhNeweh4ovP3RQ==",
      "h": "dpOouXwzzjhiqgkYuTtruLxbKg2t1gGqfF0mz3bbYV0="
    }
  },
  "藍天": {
    "salt": "vnWf/gBMflwIFjBxs/xHcQ==",
    "iv": "oJEQjrqawOrRf79O",
    "ct": "mJ6Dzu7sEc9k8v5Bkj1dfbH2yhJhfzYfM8/mGf1hM1NK0+G1+PI/ZbVDZUej5rvPQH8y8LfLrFOO2bE5xMyG4l8mG2usLKGkAsl+aUponXObz6qiAl7058wf99Fuglg6oN2E/04FggZfMLigsvoWJH7R9IxeXAlfvX6QRRkEjA==",
    "auth": {
      "hSalt": "iC40FlgN6p+cMChf0YrXbA==",
      "h": "iSlV5fkbpmQBZKljXRhWSn7GFhnKzp8Fi0gwI/nIGD4="
    }
  },
  "MM": {
    "salt": "PZMhLUg9vMITPUmzyjICvQ==",
    "iv": "m4sZVAaxGPfDea4B",
    "ct": "rGNydCYyBFe5qry0VQuHdqCd/f+kP/wnm4hPAfWYpsR6yHjZkL6TzvV2pD0wBeRYSISJ93yHKkR1B4dBlJYP+iAZ19sVphSNiTguShs3JDG/HpInxIEIRKHnWts6dI+FjItkEZhW+QLhJBEK7Ol2Sbn0/Nn5xQWiMI4vbB3l73i/",
    "auth": {
      "hSalt": "61BUKVYlUrJroDvz27UoMQ==",
      "h": "AMTd28lJoyDTmS+acWATBZql0Wf0jlQF8JH3rzB3Gus="
    }
  },
  "奴奴": {
    "salt": "sEHO3irxBbKiRjXyqRw9Tw==",
    "iv": "832xelQkeA+iM1lw",
    "ct": "nfHOiB6trWspoTceDVAjawutvqVBZ07fyBoMhVLwE4Nsm+U+m3Es4mtny8MEl72hDREMOLmu2UhpyWlZVxWgG0rH8maRWRFJvyj8fNk5kXGbNHmB0PnaKhtfEroSGUZCYNeuXBrjD4dsI2zftEQ2j5G+IQeOx5K34d7bQ9quOQ==",
    "auth": {
      "hSalt": "EdoGSbLjHSACmLg25Za84A==",
      "h": "mbcwRQ8z6DP2RgPD/YIC2+nfmH5wlrnGcGVwS0brnaU="
    }
  },
  "信": {
    "salt": "GoMY2m5Z/azDLOM70Ky8kw==",
    "iv": "4RmxK+Kqw+so/iZf",
    "ct": "KLwnYY9BXhzUuHfSc+kx5ZbIWGccQlZAPtnGKvP8KTHWN1tZ7CWCoo8Osh/j2c1u+/YugW7abVKg8HjJz6vU+mjamORnpFmmSMRjQ4rxw4vLuoVkM0FS6aHdfl9GPTjPplRpAyc0dDX6o8XLtTNiRZtqbP7y6ORQAJpcJXKSuA==",
    "auth": {
      "hSalt": "3FyOndjhrUn1R9wR4koS0Q==",
      "h": "h5hKUce7xWgTd7RQdPzx2gc/ADMVwd0MQkzKocGVmlQ="
    }
  },
  "涼咩": {
    "salt": "3WVqWJ/hxKmrCYkk63PZNA==",
    "iv": "UEU9Z3tS0Wq452jX",
    "ct": "G5/kUuSREI8TJ8r0aZiG/9smA5Nbmd9cPzKtl0Je7paoGUExaJ3m0hcfI12DA83WsZVqB3aHSld8Np4oVjj48rGtcD7sgbqBGBcPG9jiVJdv3/kCJLRcvtVrtsqgtvWPRIr9fvllWo+QMGwwMirEpe74fGTdgwqfX+9YrwhLUQ==",
    "auth": {
      "hSalt": "8VpYEraGaaRuWwEnG0plEg==",
      "h": "etDoLbRsdNpWtLXvzpZaM+xe9ekIVKOSUpl7HC5BLNg="
    }
  },
  "阿克": {
    "salt": "eW/IwE6OA8oMGT4EnPax5g==",
    "iv": "DSdNf4JNrLjm0wVW",
    "ct": "bf7hzom6FprDf1vMfLerhGpBcdxjYWUuoWgnb2Ih1iqFzCrq253mp61mo7SOXgAucswJ2MPjA5PadDHZUPNYwyaxQVB25SIbP4q57DDtq0AsTRHCSQq34/33He60hVEKScpUqAJR10husH38B9kErUxPZKhPnW8WBd99ueWH8g==",
    "auth": {
      "hSalt": "GDn/4yJtiZRmi7792f+H+g==",
      "h": "tsfWwsZq5ERnn54CA4JTV2f0ETXoyeCpRKn0NmrUXJ0="
    }
  },
  "Pony": {
    "salt": "f+lTQG0CNwD0z5/L70+NBw==",
    "iv": "6BimlCDbkaglNOYJ",
    "ct": "W0TPjpfkqwvLsww/oKdGxhuLxB9WHnP/2GlYXnl/+xyBdPzZf8I9nkOJil7edoaCZXc97kmKXG49gUszc/lEoivZYOy0Ynoh8bQtboFDHzRwJb5N4culUIsMQCQdRebCVOIMB4+y2oOBIlRspCsMiDsi8Tr6TBiGkthWmtmHZfupVHA=",
    "auth": {
      "hSalt": "yoQ+Iof0nepqQ+ZSPUVr5A==",
      "h": "0oza+Owqi+MgTsldNCvyfAURjBQJnCqVH0tCu9apqkk="
    }
  }
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



