const words = ["Great", "Good", "Bad", "Nice"];

let p = document.querySelector("p");

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomElement = words[randomIndex];
  return randomElement;
}

