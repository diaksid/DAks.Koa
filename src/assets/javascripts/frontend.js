import $ from 'jquery'
import './pro/float_to_top'
import './pro/scroll_to'
import './pro/lazyload'
import './pro/lightbox'

($ => {
  const SCROLL_TO_TOP = 1000

  $(() => {
    $.scrollTo()
    // $('[data-scroll]').scrollTo()

    $('[data-light]').lightbox()

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
  })

  $.floatToTop()

  const $toTop = $('.scroll-to-top')

  function scrollToTop () {
    if (window.pageYOffset > SCROLL_TO_TOP) {
      $toTop.addClass('show')
    } else {
      $toTop.removeClass('show')
    }
  }

  window.addEventListener('load', () => {
    $('[data-lazy]', 'main').lazyload()
    $(document.querySelectorAll('[data-carousel-lazy]')).lazyload('.carousel', 'slid.bs.carousel', {
      attribute: 'carouselLazy'
    })
    scrollToTop()
  })

  window.addEventListener('scroll', () => {
    scrollToTop()
  })
})($)
