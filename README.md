# 🎨 JS Scroll Animation – Opgavesæt: Sluttilstande, klik-animationer og lyd

## 🧭 Formål
I denne øvelse arbejder du med **CSS-animationer**, **JavaScript-events** og **lyd-afspilning**.  
Du lærer at forstå forskellen mellem *starttilstand*, *sluttilstand ved scroll* og *sluttilstand ved klik*, samt hvordan man afspiller lyd via JavaScript.
Der er i alt 5 opgaver som du bedes løse og afslutningvis uploade den færdige kildekode til dit eget GitHub repository. 

---

## 📁 Du får filerne:
Når du starter opgaven, får du følgende filer og mapper i projektet:

index.html

css/

└── style.css

js/

└── script.js

img/

└── img1.jpg

└──img2.jpg 

└──img3.jpg


Disse filer indeholder en delvis færdig opsætning, hvor du skal tilføje egne animationer, klik-funktioner og lyd.

---

## 🧩 1. Opgave: Forstå de tre tilstande i sec5

I `sec5` findes tre billeder (hest, isbjørn og hund).  
Hvert billede har klassen `.animate`, som bruges til at styre animationen.

### A. Starttilstand
```css
.sec5 .animate {
  transform: translateX(100%) rotate(-90deg);
}
````

### B. Sluttilstand ved scroll
```css
.sec5.show-animate .animate {
  transform: translateX(0) rotate(0deg);
}
````

### C. Eksempel på klik-sluttilstand
```css
.sec5.show-animate .animate.anim-scale {
  transform: translateX(0) rotate(0deg) scale(2);
}
```
---
## 🧱 2. Opgave: Lav to nye sluttilstande (kun CSS)
Du skal lave to nye klik-animationer i CSS, bygget på samme måde som anim-scale.

Tilføj dem lige efter `.sec5.show-animate .animate { ... }` i `style.css`.

### 🧮 Opgave 2.1 – anim-skew

Lav en ny selector:
```CSS
.sec5.show-animate .animate.anim-skew { ... }
```
**Krav:**
1. Flyt elementet ind (translateX(0))
2. Tilføj en skævvridning (skew(-20deg))
3. Tilføj en skalering (scale(1.16))
---

## ⚙️ 3. Opgave: Klik-hændelser i script.js

Din `script.js` indeholder tomme TODO-felter.
Du skal selv skrive koden, der aktiverer animationerne ved klik.

### 🐶 Opgave 3.1 - Hund (dogElem)

1. Find elementet via `document.getElementById("dogElem")`
2. Tjek, at det findes
3. Tilføj en `click`-eventlistener
4. Inde i funktionen: brug `this.classList.toggle("anim-scale")` til at aktivere animationen

### 🐶 Opgave 3.2 - 🐻 Isbjørn (bearElem)

1. Find elementet via `document.getElementById("bearElem")`
2. Tjek, at det findes
3. Tilføj en `click`-eventlistener
4. Inde i funktionen: brug `this.classList.toggle("anim-rotate")`

### 🐶 Opgave 3.3 - 🐴 Hest (horseElem)

1. Find elementet via `document.getElementById("horseElem")`
2. Tjek, at det findes
3. Tilføj en `click`-eventlistener
4. Inde i funktionen: brug `this.classList.toggle("anim-skew")`
---
## 🔊 4. Opgave: Afspil lyd ved klik

### Opgave 4.1 – Find eller lav dine egne lydfiler

- Find tre passende lydklip (fx hest, hund, bjørn) på internettet.
- Sørg for, at de er i .wav-format.
- Opret en ny mappe i projektet: `sound/`

Læg dine lydfiler her, fx:

- `sound/horse.wav`
- `sound/dog.wav`
- `sound/bear.wav`

### Opgave 4.2 - Opret lydobjekter

I toppen af din `script.js` skal du:

- Oprette tre `Audio()`-objekter
- Give hvert objekt en `src`-sti til din lydfil
- Navngiv fx dine variabler `soundDog`, `soundHorse`, `soundBear`

*💡 Eksempel (kun hunden):*
```JavaScript
const soundDog = new Audio();
soundDog.src = "sound/dog.wav";
```
*💡 Hint til de øvrige dyr:*

- Gentag samme fremgangsmåde for hesten og bjørnen.
- Husk at ændre både **variabelnavn** og **filnavn**.

### Opgave 4.3 – Afspil lyd ved klik

I dine klik-funktioner for hvert dyr skal du udvide koden, så lyden også afspilles, når man klikker.

**Instrukser:**

1. Tag variablen, som repræsenterer dit element (fx dogElem).
2. Tilføj en event listener, der lytter efter "click".
3. Inde i den anonyme funktion:
- Brug `this.classList.toggle(...)` til at aktivere din animation.
- Afspil den tilhørende lyd ved at kalde `.play()` på den rigtige lydvariabel.

*💡 Hint:*

- Sørg for at `.play()` bliver kaldt efter du toggler CSS-klassen.
- Brug den rigtige lydvariabel til det rigtige dyr.
- Eksempel på logik (ikke kode):
>“Når der klikkes på hunden → aktiver animation → afspil hundelyd.”
---

## 🧪 5. Opgave: Ny sektion (sec6) med eget billede + klik-animation

I denne opgave udvider du siden med en sektion 6 og bygger hele kæden selv: HTML → CSS → JS.

### Opgave 5.1 — HTML (index.html)

1. Åbn `index.html` og se strukturen for de eksisterende sektioner `(sec1–sec5)`.
2. Tilføj efter `sec5` en ny sektion: 
  - `<section class="sec6"> … </section>`
  - Inde i sektionen skal der være én beholder-div (fx med en passende klasse), som indeholder ét valgfrit billede (`<img>`), du selv finder på internettet.
  - Download billedet, gem det i projektets `img/`-mappe, og brug filstien i dit `<img>`-tag.
3. Sørg for, at billedet er centreret i sektionen (tænk over HTML-struktur, så CSS bliver nemt).
4. Giv billedet et entydigt id (fx `id="customElem"`), som du senere kan hente i JavaScript.

> Hint: Hold HTML-strukturen konsistent med de andre sektioner, så du let kan genbruge mønstrene.

### Opgave 5.2 — CSS (style.css)

Tilføj CSS til `sec6`, så den følger samme “start/slut”-mønster som i opgave 2:

1. Starttilstand for elementet i sec6 (fx skjult, roteret eller forskudt – vælg selv).
  - Selector-mønster: `.sec6 .animate { … }`

2. Sluttilstand ved scroll (når `sec6` får `.show-animate`).
  - Selector-mønster: `.sec6.show-animate .animate { … }`

3- Klik-sluttilstand (ekstra effekt ved klik) — navngiv din klasse selv (fx `.anim-pop, .anim-flip, .anim-bounce`, etc.).
  - Selector-mønster: `.sec6.show-animate .animate.<DIN-klasse> { … }`
  - Kombinér alle `transforms` i én `transform` (samme princip som i `sec5`).

>Hints:
> - Brug samme rækkefølge som i `sec5`: start → slut ved scroll → slut ved klik.
> - Husk at kun én `transform` er aktiv ad gangen – kombiner derfor effekterne i samme regel.

### Opgave 5.3 — JavaScript (script.js)

Tilføj klik-funktionalitet, så billedet i `sec6` toggler din klik-klasse ved klik:

1. Find elementet i DOM’en med `document.getElementById("<dit-id>"`).
2. Tjek at elementet findes.
3. Tilføj en `click`-eventlistener, der kalder en **anonym funktion**.
4. Inde i funktionen: brug `this.classList.toggle("<din-klik-klasse>")`.

> Hints:
> - Følg mønsteret fra `dogElem`, `bearElem` og `horseElem`, men brug dit eget id og din egen CSS-klik-klasse.
> - Sørg for, at sec6’s sluttilstand (ved `scroll`) er aktiv, før du tester klik (`scroll` ned til sektionen først).