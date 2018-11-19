// Tooltips
// From: https://osvaldas.info/elegant-css-and-jquery-tooltip-responsive-mobile-friendly

var $targets = $('[rel~=tooltip]'),
  $target,
  tip,
  $tooltip,
  pos_left,
  pos_top;

$targets.on('mouseenter', function () {
  $target  = $(this);
  tip     = $target.attr('title');
  $tooltip = $('<div class="usajobs-tooltip" id="tooltip"></div>');

  if (!tip || tip === '') {
    return false;
  }

  $target.removeAttr('title');
  $tooltip.css('opacity', 0)
    .html(tip)
    .appendTo('body');

  var initTooltip = function () {
    if ($(window).width() < $tooltip.outerWidth() * 1.5) {
      $tooltip.css('max-width', $( window ).width() / 2 );
    } else {
      $tooltip.css('max-width', 320);
    }

    pos_left = $target.offset().left + ( $target.outerWidth() / 2 ) - ( $tooltip.outerWidth() / 2 );
    pos_top  = $target.offset().top - $tooltip.outerHeight() - 20;

    if (pos_left < 0) {
      pos_left = $target.offset().left + $target.outerWidth() / 2 - 20;
      $tooltip.addClass('left');
    } else {
      $tooltip.removeClass('left');
    }

    if (pos_left + $tooltip.outerWidth() > $( window ).width()) {
      pos_left = $target.offset().left - $tooltip.outerWidth() + $target.outerWidth() / 2 + 20;
      $tooltip.addClass('right');
    } else {
      $tooltip.removeClass('right');
    }

    if (pos_top < 0) {
      pos_top  = $target.offset().top + $target.outerHeight();
      $tooltip.addClass('top');
    } else {
      $tooltip.removeClass( 'top' );
    }

    $tooltip.css( { left: pos_left, top: pos_top } )
      .animate( { top: '+=10', opacity: 1 }, 50 );
  };

  initTooltip();

  $(window).resize($.throttle( 250, function () {
    initTooltip();
  }));

  var removeTooltip = function () {
    $tooltip.animate( { top: '-=10', opacity: 0 }, 50, function () {
      $( this ).remove();
    });

    $target.attr( 'title', tip );
  };

  $target.on('mouseleave', removeTooltip);
  $tooltip.on('click', removeTooltip );
});
