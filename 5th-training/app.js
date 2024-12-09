let div = document.querySelector("div");

document.addEventListener("mousemove", function (event) {
  div.style.left = -7 + event.clientX + "px";
  div.style.top = -7 + event.clientY + "px";
});