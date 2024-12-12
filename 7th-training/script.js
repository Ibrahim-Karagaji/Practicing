let before = document.getElementById("before");
let after = document.getElementById("after");

after.onclick = function () {
  after.classList.toggle("black");
  if ((after.className == "black")) {
    after.style.transform = "translate(63px, 0px)";
    after.style.backgroundColor = "black";
    before.style.backgroundColor = "white";
    document.body.style.backgroundColor = "black";
  } else {
    after.style.transform = "translate(0px, 0px)";
    after.style.backgroundColor = "white";
    before.style.backgroundColor = "black";
    document.body.style.backgroundColor = "white";
  }
};
