import $ from 'jquery'
import './pro/lazyload'
import './pro/lightbox'

($ => {
  $(() => $('[data-lightbox]').lightbox())

  $(window).on('load', () => $('[data-lazy]', 'main').lazyload())
})($)
