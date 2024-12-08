const words = ["Great", "Good", "Bad", "Nice"];

let p = document.querySelector("p");

p.style.color = "green";

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomElement = words[randomIndex];
  return randomElement;
}

function peintWord(number) {
  let word = getRandomWord();
  let setIntervalID = setInterval(() => {
    p.appendChild(document.createTextNode(word[number]));
    if (number == word.length - 1) {
      deleteWord(word, number);
      clearInterval(setIntervalID);
    }
    number++;
  }, 350);
}

function deleteWord(word, number) {
  number = word.length - 1;
  let setIntervalID = setInterval(function () {
    let empty = "";
    for (let i = 0; i < number; i++) {
      empty += word[i];
    }
    p.textContent = empty;
    number--;
    if (number == -1) {
      peintWord((number += 1));
      clearInterval(setIntervalID);
    }
  }, 350);
}


