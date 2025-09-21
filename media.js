const welcome = document.getElementById("welcome");
const theVideo = document.getElementById("theVideo");
const audioPlayer = document.getElementById("audioPlayer");
const downloadLink = document.getElementById("downloadLink");
const logoutBtn = document.getElementById("logoutBtn");

// 將 dl.dropboxusercontent.com 直連 → 轉為 www.dropbox.com 並帶 dl=1 以「強制下載」
function toDropboxDownload(u){
  try{
    const url = new URL(u);
    if (url.hostname === "dl.dropboxusercontent.com") {
      url.hostname = "www.dropbox.com";
      // Dropbox 參數有時會帶其他 query，保留原有參數並強制 dl=1
      url.searchParams.set("dl", "1");
      return url.toString();
    }
    // 其他雲端就直接回傳（或在這裡加 Google Drive/OneDrive 邏輯）
    return u;
  }catch(e){
    return u;
  }
}

const name = sessionStorage.getItem("fan_name");
const audioUrl = sessionStorage.getItem("fan_audio");  // 這是「可播放」的直連 URL（dl.dropboxusercontent.com）
const videoSrc = sessionStorage.getItem("fan_video");

if(!name || !audioUrl || !videoSrc){
  window.location.replace("index.html");
} else {
  welcome.textContent = `歡迎，${name}！`;

  // 影片
  theVideo.src = videoSrc;

  // 音檔播放：用直連（dl.dropboxusercontent.com）
  audioPlayer.src = audioUrl;

  // 音檔下載：轉為 www.dropbox.com 並加 dl=1 以 attachment 下載
  const downloadUrl = toDropboxDownload(audioUrl);
  downloadLink.href = downloadUrl;

  // 嘗試指定檔名（跨網域有時會被忽略，但無害）
  const guessName = name ? `${name}.wav` : "audio.wav";
  downloadLink.setAttribute("download", guessName);

  if (polaroidCaption) {
    polaroidCaption.textContent = `To：${name}`;
  }
}

logoutBtn.addEventListener("click", () => {
  sessionStorage.clear();
  window.location.href = "index.html";
});


