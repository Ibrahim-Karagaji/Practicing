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

calnce.onclick = function () {
  backGroundIMage.style.opacity = "100%";
  play.style.opacity = "100%";
  calnce.style.opacity = "0%";
  video.src = "";
};
