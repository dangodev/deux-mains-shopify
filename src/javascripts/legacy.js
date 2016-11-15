/**
 * Legacy
 *
 * Old 2.0 code
 */

import $ from 'jquery';

// ----- Modal ----- //

const modalClose = () => {
  $('body').removeClass('is-modal-viewing');
  $('.modal').removeClass('is-viewing');
};

const modalOpen = (el) => {
  if (!el) {
    return false;
  }
  $('body').addClass('is-modal-viewing');
  el.addClass('is-viewing');
};

const modal = () => {
  const $modalTriggers = $('[data-modal]');

  // 1. Add click binding to modal triggers

  $modalTriggers.each((i, el) => {
    $(el).on('click', (e) => {
      const target = $(e.target).attr('data-modal');
      const $modal = $(target);
      modalOpen($modal);
      e.preventDefault();
    });
  });

  // 2. Add a way to close modals with click

  const $closers = $('.modal, .modal-close, .modal-screen');
  $closers.each((i, el) => {
    $(el).on('click', (e) => {
      if ($(e.target).hasClass('modal') || $(e.target).hasClass('modal-screen') || $(e.target).hasClass('modal-close')) {
        modalClose();
        e.preventDefault();
      }
    });
  });

  // 3. Add `Esc` close

  $(document).on('keydown', (e) => {
    if (e.which === 27) {
      modalClose();
    }
  });
};

// ----- Signup ----- //

const signup = () => {
  setTimeout(() => {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)deux\_mains\_signup\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "skipped") {
      modalOpen($('#modal_signup'));
      const expires = new Date(+ new Date + 12096e5);
      document.cookie = 'deux_mains_signup=skipped; expires=' + expires.toString();
    }
  }, 10000);
};

// ----- Vimeo ----- //

export default {
  modal,
  signup,
};
