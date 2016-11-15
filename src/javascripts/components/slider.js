/**
 * Slider
 *
 * Product Carousel
 */

import $ from 'jquery';
import slickModule from 'slick-carousel';

export default function () {
  const activeSlide = (index) => {
    $('.slick-nav a').removeClass('is-selected');
    $(`.slick-nav a:eq(${index})`).addClass('is-selected');
  };

  $('.slick').on({
    afterChange: (e, slick, currentSlide) => {
      activeSlide(currentSlide);
    },
    init: () => {
      activeSlide(0);

      $('.slick-nav a').on('click', (clickEvent) => {
        const index = $('.slick-nav a').index(clickEvent.target);
        $('.slick').slick('slickGoTo', index);
        activeSlide(index);

        clickEvent.preventDefault();
      });
    },
  });

  $('.slick').slick({
    arrows: false,
  });
}
