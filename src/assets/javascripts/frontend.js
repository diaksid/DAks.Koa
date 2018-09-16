import $ from 'jquery'
import './pro/lazyload'
import './pro/lightbox'

($ => {
  $(() => {
    $('[data-light]').lightbox()

    const $draver = $('.drawer')
    const $draverCheck = () => {
      $draver.find('.collapse.show').removeClass('show')
      $draver.find('[aria-expanded=true]').attr('aria-expanded', 'false')
    }
    $('.drawer__toggler').click(() => {
      $draver.toggleClass('drawer--mini')
      $draverCheck()
    })
    $draver.find('.dropdown-toggle').click(() => $draver.removeClass('drawer--mini'))
    $('main').click(() => {
      if (!$draver.hasClass('drawer--mini')) {
        $draver.addClass('drawer--mini')
        $draverCheck()
      }
    })
  })

  $(window).on('load', () => {
    $('[data-lazy]', 'main').lazyload()
    $(document.querySelectorAll('[data-carousel-lazy]')).lazyload('.pro-carousel', {
      event: 'slid.bs.carousel',
      attribute: 'carouselLazy'
    })
  })
})($)
