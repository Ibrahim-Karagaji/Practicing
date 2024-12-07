let icon = document.getElementById("font");

icon.onclick = function () {
  icon.classList.toggle("red");
  let getComputed = window.getComputedStyle(icon);
  let color = getComputed.getPropertyValue("color");
  if (color == "rgb(255, 0, 0)") {
    let clickIcon = document.createElement("i");
    clickIcon.className = "fa-solid fa-heart clicked";
    document.body.appendChild(clickIcon);
    clickIcon.style.transition = "1s";
    clickIcon.style.color = "red";
    setTimeout(() => {
      clickIcon.style.opacity = "0%";
      clickIcon.style.zIndex = "-1";
      clickIcon.style.transform = "scale(2)";
    }, 0);
  }
};
