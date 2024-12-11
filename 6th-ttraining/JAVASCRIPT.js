let backGroundIMage = document.getElementById("backgroundID");
let play = document.getElementById("play");
let calnce = document.getElementById("cancle");
let video = document.getElementById("video");

play.onclick = function () {
  backGroundIMage.style.opacity = "0%";
  play.style.opacity = "0%";
  calnce.style.opacity = "100%";
  video.src = "trailer.mp4";
};
