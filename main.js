const header = document.querySelector(".header-top");
const logo = document.querySelector(".logo");
const backToTopBtn = document.querySelector(".back-to-top");

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
