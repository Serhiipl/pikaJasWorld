"use strict";
// wyznaczamy czy to jest urządzenie mobilne i dodajemy odpowiedni klas
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.body.classList.add("_touches");
} else {
    document.body.classList.add("_pc");
};


const menuLinks = document.querySelectorAll('.menu-link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const goToBlock = document.querySelector(menuLink.dataset.goto);
            const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

            window.scrollTo({
                top: goToBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// temp  sdfsdjfsd