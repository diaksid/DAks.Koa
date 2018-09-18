import $ from 'jquery'
import ScrollSign from './pro/scroll_sign'
import './pro/scroll_to'
import './pro/lazyload'
import './pro/lightbox'

(($, ScrollSign) => {
  $.scrollSign()

  $(() => {
    $.scrollTo()

    const $draver = $('.drawer')
    const $draverCheck = () => {
      $draver.find('.collapse.show').removeClass('show')
      $draver.find('[aria-expanded=true]').attr('aria-expanded', 'false')
    }
    $('.drawer__toggle').click(() => {
      $draver.toggleClass('drawer--mini')
      $draverCheck()
    })
    $draver.find('.dropdown-toggle').click(() => $draver.removeClass('drawer--mini'))

    $.lightbox()
      .on('open', ScrollSign.hide)
      .on('close', ScrollSign.show)

    $('.modal')
      .on('show.bs.modal', ScrollSign.hide)
      .on('hidden.bs.modal', ScrollSign.show)
  })

  window.addEventListener('load', () => {
    $.lazyload()
    $(document.querySelectorAll('[data-carousel-lazy]')).lazyload('.carousel', 'slid.bs.carousel', {
      attribute: 'carousel-lazy'
    })
    $(document.body).scrollspy({
      target: '.drawer'
    })
  })
  /*
  window.addEventListener('scroll', () => {
  })
  */
})($, ScrollSign)
