var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  /* pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, */
  breakpoints: {
    1024: {
      slidesPerView: 4.5,
    },
    865: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    425: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

 