import $ from 'jquery'
import WOW from 'wowjs'
import * as PRO from 'javascripts/pro/jquery'
import Mailer from './mailer'


(function ($, WOW, PRO) {
  $.scrollSign()

  $(() => {
    const wow = new WOW({ live: false })
    wow.init()

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

    const mailer = new Mailer('.modal-mail__form')
    mailer.init()
  })

  window.addEventListener('load', () => {
    $.lazyload()
    $(document.querySelectorAll('[data-carousel-lazy]')).lazyload('.carousel', 'slid.bs.carousel', {
      attribute: 'carousel-lazy'
    })
    $(document.body).scrollspy({
      target: '.drawer',
      offset: 200
    })
  })
}).call(this, $, WOW, PRO)
