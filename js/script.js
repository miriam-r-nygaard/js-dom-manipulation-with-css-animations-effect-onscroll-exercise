"use strict";

/* -------------------------------------------------
   1) SCROLL-OBSERVER: Tildel .show-animate ved scroll
--------------------------------------------------- */

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
      sec.classList.remove("show-animate");
    }
  });
};

/* -------------------------------------------------
   2) HOVER-EFFEKT PÅ FØRSTE SEKTION (eksempel)
--------------------------------------------------- */
//her siger browseren fejl, så jeg har fjernet All i querySelector
const sectionOne = document.querySelector(".sec1");

// kun anonyme funktioner kan bruge 'this'
sectionOne.addEventListener("mouseover", function () {
  //det er allerede defineret det er en class så behøver ikke . foran
  this.classList.add("scale");
});

sectionOne.addEventListener("mouseout", function () {
  this.classList.remove("scale");
});

/* -------------------------------------------------
   3) OPGAVE: KLIK-EFFEKTER (SEC5)
   Her skal du aktivere animationerne for dyrebillederne
   via klik. Brug classList.toggle(...) som i eksemplet.
--------------------------------------------------- */

//lavede knapper med dyrelyde i undervisningen

/* // nu laver jeg JavaScripten til lydene der skal afspille, når man trykker på knap
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
  */

/* -------------------------------------------------
   🐶 HUND → anim-scale
   - Formål: når man klikker på hunden, skal billedet forstørres.
   - Id i HTML: "dogElem"
   - CSS-klasse: "anim-scale"

   TRIN:
   1) Find billedet med getElementById("dogElem")
   2) Tjek om elementet findes (if (dogElem) {...})
   3) Tilføj en click-eventlistener
   4) Brug this.classList.toggle("anim-scale") inde i funktionen
--------------------------------------------------- */
const dogElem = document.getElementById("dogElem");

if (dogElem) {
  dogElem.addEventListener("click", function () {
    this.classList.toggle("anim-scale");
  });
  dogElem.addEventListener("click", () => {
    soundDog.play();
  });
}
/* -------------------------------------------------
   🐻 ISBJØRN → anim-rotate
   - Formål: når man klikker på isbjørnen, skal billedet rotere + zoome.
   - Id i HTML: "bearElem"
   - CSS-klasse: "anim-rotate"

   TRIN:
   1) Find billedet med getElementById("bearElem")
   2) Tjek om elementet findes
   3) Tilføj en click-eventlistener
   4) Brug this.classList.toggle("anim-rotate")
--------------------------------------------------- */
const bearElem = document.getElementById("bearElem");

if (bearElem) {
  bearElem.addEventListener("click", function () {
    this.classList.toggle("anim-rotate");
  });
  bearElem.addEventListener("click", () => {
    soundPolarbear.play();
  });
}
/* -------------------------------------------------
   🐴 HEST → anim-skew
   - Formål: når man klikker på hesten, skal billedet skævvrides + zoome.
   - Id i HTML: "horseElem"
   - CSS-klasse: "anim-skew"

   TRIN:
   1) Find billedet med getElementById("horseElem")
   2) Tjek om elementet findes
   3) Tilføj en click-eventlistener
   4) Brug this.classList.toggle("anim-skew")
--------------------------------------------------- */

const horseElem = document.getElementById("horseElem");

if (horseElem) {
  horseElem.addEventListener("click", function () {
    this.classList.toggle("anim-skew");
  });
  horseElem.addEventListener("click", () => {
    soundHorse.play();
  });
}

/* -------------------------------------------------
   4) OPGAVE: LYD VED KLIK
   I denne opgave skal du tilføje lyd til dine klik-animationer.

   TRIN:
   1) Opret tre Audio()-objekter øverst i denne fil.
      - fx: const soundDog = new Audio();
      - og tildel lydfilerne en src: soundDog.src = "sound/dog.wav";
   2) Opret derefter lignende objekter til hest og bjørn.
   3) Inde i hver klik-eventlistener (ovenfor):
      - Afspil lyden med .play() på det rigtige lydobjekt.
      - Sørg for, at afspilning sker efter classList.toggle().
--------------------------------------------------- */

/*
TODO:
const soundDog = ...
const soundHorse = ...
const soundBear = ...
*/

//Nu begynder lyd filerne, de laver en sti til lyd mappen (sound)
const soundHorse = new Audio();
soundHorse.src = "../sound/horse.wav";

const soundPolarbear = new Audio();
soundPolarbear.src = "../sound/polarbear.wav";

const soundDog = new Audio();
soundDog.src = "../sound/dog.wav";

/* -------------------------------------------------
   5) OPGAVE: NY SEKTION – SEC6
   Du skal selv tilføje en ny sektion i HTML (sec6),
   skrive CSS-animationer til den, og aktivere den her i JS.

   TRIN:
   1) Find dit nye element med document.getElementById("<dit-id>")
   2) Tjek om elementet findes
   3) Tilføj en eventlistener på "click"
   4) Inde i funktionen: this.classList.toggle("<din-klik-klasse>")
--------------------------------------------------- */

// TODO: Tilføj din egen klikfunktion for billedet i sec6 her

const sparrowElem = document.getElementById("sparrowElem");

if (sparrowElem) {
  sparrowElem.addEventListener("click", function () {
    this.classList.toggle("anim-bounce");
  });
  sparrowElem.addEventListener("click", () => {
    soundSparrow.play();
  });
}

const soundSparrow = new Audio();
soundSparrow.src = "../sound/sparrow.wav";
