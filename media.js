const welcome = document.getElementById("welcome");
const theVideo = document.getElementById("theVideo");
const audioPlayer = document.getElementById("audioPlayer");
const downloadLink = document.getElementById("downloadLink");
const logoutBtn = document.getElementById("logoutBtn");

// 沒有 session 資料就導回首頁
const name = sessionStorage.getItem("fan_name");
const audioUrl = sessionStorage.getItem("fan_audio");
const videoSrc = sessionStorage.getItem("fan_video");

if(!name || !audioUrl || !videoSrc){
  window.location.replace("index.html");
} else {
  welcome.textContent = `歡迎，${name}！`;
  theVideo.src = videoSrc;
  audioPlayer.src = audioUrl;
  downloadLink.href = audioUrl; // 同一份音檔，提供下載
}

logoutBtn.addEventListener("click", () => {
  sessionStorage.clear();
  window.location.href = "index.html";
});

const polaroidCaption = document.getElementById("polaroidCaption");
polaroidCaption.textContent = `To：${name}`;