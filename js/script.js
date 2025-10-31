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
