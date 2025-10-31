"use strict";

const sections = document.querySelectorAll("section");

// Tager fat om Browser vinduet og gør noget ved
window.onscroll = () => {
  // tager fat i const sections i hiver fat i hver enkel (sec ) derefter ny arrow funktion
  sections.forEach((sec) => {
    //får nuværende scrollposition
    let scrollDistance = window.scrollY;

    //afstand til toppen af elementet, får sektionen i position ift. toppen af dokumentet
    let secDistance = sec.offsetTop;

    //hvis sektionen er kommet ind i synsfeltet tilføjes 'show animate' , eller fjernes den
    if (scrollDistance >= secDistance) {
      //show-animate er en klasse i css
      sec.classList.add("show-animate");
    } else {
      sec.ClassList.remove("show-animate");
    }
  });
};

const sectionOne = document.querySelectorAll(".sec1");

// kun anonyme funktioner kan bruge 'this'
sectionOne.addEventListener("mouseover", function () {
  //det er allerede defineret det er en class så behøver ikke . foran
  this.ClassList.add("scale");
});

sectionOne.addEventListener("mouseout", function () {
  this.ClassList.remove("scale");
});

// nu laver jeg JavaScripten til lydene der skal afspille, når man trykker på knap
const getHorseBtn = document.getElementById("horse");
const getPolarbearBtn = document.getElementById("polarbear");
const getdogBtn = document.getElementById("dog");

//Nu begynder lyd filerne, de laver en sti til lyd mappen (sound)
const soundHorse = new Audio();
soundHorse.src = "../sound/horse.wav";

const soundPolarbear = new Audio();
soundPolarbear.src = "../sound/polarbear.wav";

const soundDog = new Audio();
soundDog.src = "../sound/dog.wav";

//jeg tilføjer event så lyden afspilles ved tryk
if (getHorseBtn) {
  getHorseBtn.addEventListener("click", () => {
    soundHorse.play();
  });
}

if (getPolarbearBtn) {
  getPolarbearBtn.addEventListener("click", () => {
    soundPolarbear.play();
  });
}

if (getDogBtn) {
  getDogBtn.addEventListener("click", () => {
    soundDog.play();
  });
}
