import './vendor/swiper.js'

const initSwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  slidesPerView: 1,
  initialSlide: 2,
  spaceBetween: 30,
  breakpoints: {
    768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 40
    },
    1280: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 4
    }
  },
  navigation: {
    nextEl: '.swiper-button-next--coaches',
    prevEl: '.swiper-button-prev--coaches',
  }
})

const initSwiperReviews = new Swiper('.swiper-container--reviews', {
  slidesPerView: 1,
  grabCursor: true,
  initialSlide: 1,

  navigation: {
    nextEl: '.swiper-button-next--reviews',
    prevEl: '.swiper-button-prev--reviews',
  }
})

export {initSwiper, initSwiperReviews};
