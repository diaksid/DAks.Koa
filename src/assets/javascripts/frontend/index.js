// import * as MDC from 'javascripts/mdc-web'
import { PRO } from '@pro'

window.PRO = PRO

/*
let turbo = !!window.Turbolinks

function ready () {
  const drawer = MDC.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'))
  const list = MDC.list.MDCList.attachTo(document.querySelector('.mdc-list'))
  list.wrapFocus = true
  const topAppBar = MDC.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'))
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open
  })
  document.querySelectorAll('.mdc-ripple-surface').forEach(function (el) {
    (MDC.ripple.MDCRipple.attachTo(el)).unbounded = true
  })
  // new Pro('.mdc-ripple-surface').each(function (el) {
  //   (MDC.ripple.MDCRipple.attachTo(el)).unbounded = true
  // })

  PRO('.is-active, .is-active > a, a[href="#"]').deactive()
  PRO()
    .lazyload()
    .lightbox('[data-lightbox]')
    .scroll()
}

function load () {
}

PRO()
  .onready(ready)
  .onload(load)

if (turbo) {
  document.addEventListener('turbolinks:visit', function () {
    turbo = 'visit'
  })
  document.addEventListener('turbolinks:load', function () {
    if (turbo === 'visit') {
      ready()
      load()
    }
  })
  // document.addEventListener('turbolinks:before-cache', function () {})
}
*/
