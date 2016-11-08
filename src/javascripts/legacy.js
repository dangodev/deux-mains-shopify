/**
 * Legacy
 *
 * Old 2.0 code
 */

import $ from 'jquery';

// ----- Modal ----- //

const modal = () => {
  var $modalTriggers = $( '[data-modal]' );

  // 1. Add click binding to modal triggers

  $modalTriggers.each( function( i, el ) {
    $( el ).on( 'click', function( e ) {
      var target = $( e.target ).attr( 'data-modal' );
      $modal = $( target );
      modalOpen( $modal );
      e.preventDefault();
    });
  });

  // 2. Add a way to close modals with click

  var $closers = $( '.modal, .modal-close, .modal-screen' );
  $closers.each( function( i, el ) {
    $( el ).on( 'click', function( e ) {
      if( $( e.target ).hasClass( 'modal' ) || $( e.target ).hasClass( 'modal-screen' ) || $( e.target ).hasClass( 'modal-close' ) ) {
        modalClose();
        e.preventDefault();
      }
    });
  });

  // 3. Add `Esc` close

  $( document ).on( 'keydown', function( e ) {
    if ( e.which === 27 )
      modalClose();
  });
};

const modalClose = () => {
  $( 'body' ).removeClass( 'is-modal-viewing' );
  var $modals = $( '.modal' );
  $modals.each( function( i, el ) {
    $( el ).removeClass( 'is-viewing' );
  });
};

const modalOpen = (modal) => {
  if(!$modal)
    return false;
  $( 'body' ).addClass( 'is-modal-viewing' );
  $modal.addClass( 'is-viewing' );
};

// ----- Signup ----- //

const signup = function() {
  setTimeout(() => {
    if( document.cookie.replace(/(?:(?:^|.*;\s*)deux\_mains\_signup\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "skipped" ) {
      modalOpen( $( '#modal_signup' ) );
      var expires = new Date( + new Date + 12096e5 );
      document.cookie = 'deux_mains_signup=skipped; expires=' + expires.toString();
    }
  }, 8000);
};

// ----- Vimeo ----- //

export default {
  modal,
  modalClose,
  modalOpen,
  selectNav,
  signup,
};
