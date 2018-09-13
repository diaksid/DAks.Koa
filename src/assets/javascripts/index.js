import * as mdc from './mdc-web';
import { PRO, PROLazyload, PROLightbox } from './pro'

function ready () {
  const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'))

  const list = mdc.list.MDCList.attachTo(document.querySelector('.mdc-list'))
  list.wrapFocus = true

  const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'))
  topAppBar.listen('MDCTopAppBar:nav', () => drawer.open = !drawer.open)

  document.querySelectorAll('.mdc-ripple-surface').forEach(el => {
    mdc.ripple.MDCRipple.attachTo(el).unbounded = true
  })

  new PRO('.is-active, .is-active > a, a[href="#"]').deactive()
  PRO
    .scroll()
  PRO.lazyload = new PROLazyload()
  PRO.lightbox = new PROLightbox()
}

function load () {
}

PRO
  .onready(ready)
  .onload(load)

window.PRO = PRO
