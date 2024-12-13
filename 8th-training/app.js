let options = document.querySelector(".fa-solid");
let pareant = document.getElementById("div");
let titlescss = document.querySelector("p");

let home = document.createElement("p");
let hpmetext = document.createTextNode("Home");
home.appendChild(hpmetext);
let work = document.createElement("p");
let worktext = document.createTextNode("Works");
work.appendChild(worktext);
let about = document.createElement("p");
let abouttext = document.createTextNode("About");
about.appendChild(abouttext);
let contact = document.createElement("p");
let contacttext = document.createTextNode("Contact");
contact.appendChild(contacttext);

const titles = [home, work, about, contact];
let conter = 0;

options.onclick = function () {
  if (options.className == "fa-solid fa-bars") {
    options.className = "fa-solid fa-xmark";
    let setIntervalid = setInterval(function () {
      pareant.appendChild(titles[conter]);
      conter++;
      if (conter > titles.length - 1) clearInterval(setIntervalid);
    }, 80);
  } else {
    options.className = "fa-solid fa-bars";
    conter = titles.length - 1;
    let setIntervalid = setInterval(function () {
      pareant.removeChild(titles[conter]);
      console.log(conter);
      conter--;
      if (conter == -1) clearInterval(setIntervalid);
    }, 80);
  }
};
