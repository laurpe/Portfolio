const header = document.querySelector(".header-top");
const logo = document.querySelector(".logo");
const backToTopBtn = document.querySelector(".back-to-top");
const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#btn-mobile");

window.onscroll = () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        header.classList.add("header-top-bg");
        backToTopBtn.classList.remove("hidden");
    } else {
        header.classList.remove("header-top-bg");
        backToTopBtn.classList.add("hidden");
    }
};

const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

logo.addEventListener("click", () => {
    scrollToTop();
    window.location.reload();
});

backToTopBtn.addEventListener("click", scrollToTop);

const showMobileMenu = () => {
    if (nav.classList.contains("responsive")) {
        nav.classList.remove("responsive");
    } else {
        nav.classList.add("responsive");
    }
};

menuBtn.addEventListener("click", showMobileMenu);
