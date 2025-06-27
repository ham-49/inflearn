var swiper = new Swiper(".mySwiper", {});
var swiper = new Swiper(".mySwiper02", {
  slidesPerView: 2, // 기본값: 모바일 기준
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    481: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
