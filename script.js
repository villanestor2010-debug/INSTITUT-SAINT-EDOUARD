// ======================================
// GESTION DU MENU BURGER (Pages Secondaires)
// ======================================

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {
        // Ouvrir et fermer le menu au clic sur le bouton
        menuBtn.addEventListener("click", function () {
            nav.classList.toggle("active");

            const menuOuvert = nav.classList.contains("active");
            menuBtn.setAttribute("aria-expanded", menuOuvert);

            // Change l'icône du menu (barres ou croix)
            if (menuOuvert) {
                menuBtn.querySelector(".menu-icon").textContent = "✕";
            } else {
                menuBtn.querySelector(".menu-icon").textContent = "☰";
            }
        });

        // Fermer automatiquement le menu lorsqu'on clique sur un lien
        const liens = nav.querySelectorAll("a");
        liens.forEach(function (lien) {
            lien.addEventListener("click", function () {
                nav.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.querySelector(".menu-icon").textContent = "☰";
            });
        });
    }
});