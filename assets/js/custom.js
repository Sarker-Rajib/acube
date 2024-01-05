window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let scroll_top = window.scrollY;
    if (scroll_top > 150) {
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

var swiper = new Swiper(".teamMember", {
    spaceBetween: 0,
    breakpoints: {
        420: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
