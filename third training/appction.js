const colors = ["cyan", "green", "red", "purple", "orangered", "brown"];

let colorsName = document.querySelector("h1");

let buttonClick = document.querySelector("p");

buttonClick.onclick = function () {

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomElement = colors[randomIndex];
  colorsName.innerText = randomElement.toString();
  buttonClick.style.backgroundColor = randomElement;
  document.body.style.backgroundColor = randomElement;
  
};
