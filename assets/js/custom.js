window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let scroll_top = window.scrollY;
    if (scroll_top > 80) {
        document.getElementById("header").style.backgroundColor = '#00000080';
    } else {
        document.getElementById("header").style.backgroundColor = "transparent";
    }
}

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
