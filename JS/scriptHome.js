var swiper = new Swiper(".slide-content", {
  speed: 1500,
  spaceBetween: 100,
  slidesPerView: 2,
  slidesPerGroup: 2,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});

