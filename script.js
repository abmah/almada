document.querySelectorAll('.swiper-signposting').forEach(function (thisSlider) {
  const id = thisSlider.id; // make sure your slider element has a unique ID
  const slider = document.getElementById(id);
  const container = slider.parentElement;

  const swiper = new Swiper(slider, {
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    navigation: {
      nextEl: container.querySelector('.swiperSignpostingNext'),
      prevEl: container.querySelector('.swiperSignpostingPrev'),
    },

  });
});