const benefitElements = document.querySelectorAll(".benefit-content-left");
const headerLogged = document.querySelector(".header__account-logged");
const headerGuest = document.querySelector(".header__account-guest");
const footerLogged = document.querySelector(".footer__account-logged");
const footerGuest = document.querySelector(".footer__account-guest");
const trialStudyBtn = document.querySelector(".header__trial-study");

window.addEventListener("scroll", function () {
    // Scrolling animations
    const triggerBottom = (this.innerHeight / 5) * 4;
    benefitElements.forEach((element) => {
        const benefitTop = element.getBoundingClientRect().top;

        if (benefitTop < triggerBottom) {
            element.classList.add("show");
        } else {
            element.classList.remove("show");
        }
    });
    // Remove header-box have position:fixed when scrolling
    const scrollTopWindow = this.scrollY;
    if (scrollTopWindow >= 100) {
        headerLogged.classList.add("scrolled");
    } else {
        headerLogged.classList.remove("scrolled");
    }
});

// Change header when clicked button
trialStudyBtn.addEventListener("click", function () {
    headerGuest.classList.toggle("hidden");
    headerLogged.classList.toggle("hidden");
    footerGuest.classList.toggle("hidden");
    footerLogged.classList.toggle("hidden");
});

// Show control menu
const showControl = document.querySelector(".menu-item-control .header-mobile-link");
const hideControl = document.querySelector(".control-header-cancel");
const headerControl = document.querySelector(".header-control");
showControl.addEventListener("click", function () {
    headerControl.classList.toggle("hidden");
});
hideControl.addEventListener("click", function () {
    headerControl.classList.toggle("hidden");
});
