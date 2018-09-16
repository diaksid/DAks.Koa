import $ from 'jquery'
import './pro/lazyload'
import './pro/lightbox'

($ => {
  $(() => {
    $('[data-lightbox]').lightbox()

    const $draver = $('.drawer')
    const $draverCheck = () => {
      $draver.find('.collapse.show').removeClass('show')
      $draver.find('a[aria-expanded=true]').attr('aria-expanded', 'false')
    }
    $('.drawer__toggler').click(() => {
      $draver.toggleClass('drawer--mini')
      $draverCheck()
    })
    $('.drawer__icon').click((event) => {
      if ($draver.hasClass('drawer--mini')) {
        event.preventDefault()
        $('.drawer').removeClass('drawer--mini')
      }
    })
    $('main').click(() => {
      if (!$draver.hasClass('drawer--mini')) {
        $('.drawer').addClass('drawer--mini')
        $draverCheck()
      }
    })
  })

  $(window).on('load', () => $('[data-lazy]', 'main').lazyload())
})($)
