/**
 * Product
 *
 * Fancy selectin’ and switchin’
 */

const $ = jQuery || window.jQuery;

$( '#add' ).on( 'click', function( e ) {
  $( '.flash.is-showing' ).removeClass( 'is-showing' );
  var $form = $( 'form[action="/cart/add"]' );
  $.ajax( {
    type: "POST",
    url: $form.attr( 'action' ),
    data: $form.serialize(),
    success: function( data ) {
      $( '#flash_added' ).addClass( 'is-showing' );
    },
    error: function( data ) {
      $( '#flash_error' ).addClass( 'is-showing' );
    }
  });
  e.preventDefault();
});
$( '.flash-close' ).on( 'click', function( e ) {
  $( this ).closest( '.flash' ).removeClass( 'is-showing' );
});
});

// Shopify code from https://github.com/Shopify/skeleton-theme/blob/master/templates/product.liquid

var selectCallback = function(variant, selector) {
if (variant) {
  if (variant.featured_image) {
    // Custom image selection
    $( '[data-id=' + variant.featured_image.id + ']' ).trigger( 'click' );
  }
  if (variant.available) {
    jQuery('#add').removeClass('is-disabled').prop('disabled', false).val({{ add_to_cart | json }});
    if (variant.inventory_management && variant.inventory_quantity <= 0) {
      jQuery('#selected-variant').html({{ product.title | json }}{% unless hide_default_title %} + ' - ' + variant.title{% endunless %});
    }
  } else {
    jQuery('#add').val({{ sold_out | json }}).addClass('is-disabled').prop('disabled', true);
  }
} else {
  jQuery('#add').val({{ unavailable | json }}).addClass('is-disabled').prop('disabled', true);
}
};

jQuery(function($) {
if( $( '#product-variants' ).is( ':visible' ) ) {
  new Shopify.OptionSelectors('product-variants', { product: {{ product | json }}, onVariantSelected: selectCallback, enableHistoryState: true });
  {% if product.options.size == 1 and product.options.first != 'Title' %}
    $('.selector-wrapper:eq(0)').prepend('<label>{{ product.options.first }}</label>');
  {% endif %}

  // Custom formatting

  $( 'select' ).each( function( i, el ) {
    $( this ).prev( 'label' ).addClass( 'form-label' );
    $( this ).wrap( '<div class="form-select"></div>' );
    $( this ).after( '<svg aria-hidden class="form-select-icn icn icn--arrow" role="img"><use xlink:href="#icon_arrow"></use></svg>' );
    $( this ).closest( '.form-select' ).parent().find( 'label, .form-select' ).wrapAll( '<div class="form-pair"></div>' );
    $( this ).closest( '.selector-wrapper' ).addClass( 'mtm' );
  });
  var variantUpdate = function() {
    var search = '';
    $( 'select:visible' ).each( function( i, el ) {
      if( $( el ).val().length )
        search += ":contains('" + $( el ).val() + "')";
    });

    var id = $( 'select[name=id]' ).find( 'option' + search ).val();
    if( id.length )
      $( 'select[name=id]' ).val( id );
  };
  $( 'select:visible' ).on( 'change', variantUpdate );
  $( 'select:visible' ).on( 'blur', variantUpdate );
}
