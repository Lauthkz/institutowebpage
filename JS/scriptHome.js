var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 100,
    slidesPerGroup: 2,
    loop: true,
    //centerSlide: 'true',
    //centeredSlides: true,
    effect: 'fade',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });