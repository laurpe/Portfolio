const header = document.querySelector(".header-top");

window.onscroll = () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        header.classList.add("header-top-bg");
    } else {
        header.classList.remove("header-top-bg");
    }
};
