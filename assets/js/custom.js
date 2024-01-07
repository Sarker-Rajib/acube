window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let scroll_top = window.scrollY;
    if (scroll_top > 150) {
        document.getElementById("header").style.backgroundColor = '#000000';
    } else {
        document.getElementById("header").style.backgroundColor = "transparent";
    }
}

var swiper = new Swiper(".featureSlider", {
    loop: true,
    spaceBetween: 22,
    breakpoints: {
        375: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

var swiper = new Swiper(".amenities", {
    autoplay: true,
    breakpoints: {
        375: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});


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
