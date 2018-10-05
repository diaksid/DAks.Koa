// import * as MDC from 'javascripts/mdc-web'
import {
  MDCDrawer,
  MDCList,
  MDCRipple,
  MDCTopAppBar
} from 'javascripts/mdc-web'
import {
  PRO,
  PROonReady,
  PROonLoad
} from '@pro'
import '@pro/extends/events'
import '@pro/extends/click'
import '@pro/animation/scroll'

function onReady () {
  const nodeMain = document.querySelector('main')

  PRO('.h-mimic-scrollbar').each(el => {
    el.style.paddingRight = `${window.innerWidth - nodeMain.clientWidth}px`
  })

  const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'))

  const list = MDCList.attachTo(document.querySelector('.mdc-list'))
  list.wrapFocus = true

  const topAppBar = MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'))
  topAppBar.setScrollTarget(nodeMain)
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open
  })

  PRO('.mdc-ripple-surface').each(el => {
    MDCRipple.attachTo(el).unbounded = true
  })

  PRO('.is-active, .is-active > a, a[href="#"]').deactive()

  // PRO()
  //   .scroll()
  //   .lazyload()
  //   .lightbox('[data-lightbox]')
}

function onLoad () {
}

PROonReady(onReady)
PROonLoad(onLoad)

/*
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
