
// ======================================
// MENU DE NAVIGATION
// INSTITUT SAINT-ÉDOUARD
// ======================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const identite = document.getElementById("identite");


// OUVRIR ET FERMER LE MENU

identite.addEventListener("click", function () {
    nav.classList.toggle("active");
});

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

    const menuOuvert = nav.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", menuOuvert);

    // Changer le symbole du bouton
    if (menuOuvert) {
        menuBtn.querySelector(".menu-icon").textContent = "✕";
    } else {
        menuBtn.querySelector(".menu-icon").textContent = "☰";
    }

});

// FERMER LE MENU APRÈS UN CLIC SUR UN LIEN

const liens = nav.querySelectorAll("a");

liens.forEach(function (lien) {

    lien.addEventListener("click", function () {

        nav.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.querySelector(".menu-icon").textContent = "☰";

    });

});

/* DIAPORAMA MANUEL */

const slides = [
    {
        image: "fond.jpeg",
        subtitle: "BIENVENUE SUR NOTRE SITE OFFICIEL",
        title: "Bienvenue à l'Institut Saint-Édouard",
        description: "Un établissement engagé dans l'excellence, l'éducation et la formation de la jeunesse."
    },
    {
        image: "school2.png",
        subtitle: "L'EXCELLENCE SCOLAIRE",
        title: "Construisons ensemble votre avenir",
        description: "Nous accompagnons chaque élève dans son apprentissage et son développement."
    },
    {
        image: "programmes2.png",
        subtitle: "UN CADRE PROPICE À L'APPRENTISSAGE",
        title: "Apprendre dans un environnement adapté",
        description: "Un cadre éducatif qui encourage la discipline, le respect et la réussite."
    },
    {
        image: "ecole4.jpeg",
        subtitle: "FORMER LES LEADERS DE DEMAIN",
        title: "L'éducation est notre priorité",
        description: "Nous préparons les jeunes à devenir des citoyens responsables et compétents."
    }
];

let currentSlide = 0;

const accueil = document.getElementById("accueil");
const subtitle = document.getElementById("slideSubtitle");
const title = document.getElementById("slideTitle");
const description = document.getElementById("slideDescription");
const heroContent = document.getElementById("heroContent");
const indicators = document.getElementById("sliderIndicators");

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    const slide = slides[currentSlide];

    heroContent.classList.add("changing");

    setTimeout(() => {
        accueil.style.backgroundImage = `url("${slide.image}")`;

        subtitle.textContent = slide.subtitle;
        title.textContent = slide.title;
        description.textContent = slide.description;

        heroContent.classList.remove("changing");

        document.querySelectorAll(".slider-indicators span")
            .forEach((dot, i) => {
                dot.classList.toggle("active", i === currentSlide);
            });
    }, 300);
}

// Indicateurs cliquables
slides.forEach((slide, index) => {
    const dot = document.createElement("span");

    dot.addEventListener("click", () => showSlide(index));

    indicators.appendChild(dot);
});

// Bouton précédent
document.getElementById("prevSlide").addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

// Bouton suivant
document.getElementById("nextSlide").addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

// Afficher la première image au démarrage
showSlide(0);

// IMPORTANT : aucun setInterval ici.
// Les images changent uniquement au clic.
/* DIAPORAMA AUTOMATIQUE */

setInterval(() => {
    showSlide(currentSlide + 1);
}, 6000);
