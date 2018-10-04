import { Pro } from '../pro'

function getRect (el) {
  if (typeof el.getBoundingClientRect === 'function') {
    return el.getBoundingClientRect()
  } else {
    return { top: 0, left: 0, bottom: 0, right: 0 }
  }
}

function isWindow (el) {
  return el === el.window
}

function getWindow (el) {
  return isWindow(el) ? el : el.defaultView
}

Pro.assign({
  innerHeight (el) {
    return isWindow(el) ? el.innerHeight : el.clientHeight
  },

  innerWidth (el) {
    return isWindow(el) ? el.innerWidth : el.clientWidth
  },

  outerHeight (el, includeMargin = true) {
    let height = this.innerHeight(el)
    if (includeMargin && !isWindow(el)) {
      const computedStyle = window.getComputedStyle(el)
      height += parseInt(computedStyle.marginTop, 10)
      height += parseInt(computedStyle.marginBottom, 10)
    }
    return height
  },

  outerWidth (el, includeMargin = true) {
    let width = this.innerWidth(el)
    if (includeMargin && !isWindow(el)) {
      const computedStyle = window.getComputedStyle(el)
      width += parseInt(computedStyle.marginLeft, 10)
      width += parseInt(computedStyle.marginRight, 10)
    }
    return width
  },

  scrollTop (el) {
    const win = getWindow(el)
    return win ? win.pageYOffset : el.scrollTop
  },

  scrollLeft (el) {
    const win = getWindow(el)
    return win ? win.pageXOffset : el.scrollLeft
  },

  offset (el) {
    if (!el.ownerDocument) {
      return null
    }
    const win = getWindow(el.ownerDocument)
    const html = el.ownerDocument.documentElement
    const rect = getRect(el)
    return {
      top: rect.top + win.pageYOffset - html.clientTop,
      left: rect.left + win.pageXOffset - html.clientLeft
    }
  },

  view (el, full = false) {
    if (!el.ownerDocument) {
      return null
    }
    const win = getWindow(el.ownerDocument)
    const html = el.ownerDocument.documentElement
    const rect = getRect(el)
    const port = {
      bottom: win.innerHeight || html.clientHeight,
      right: win.innerWidth || html.clientWidth
    }
    if (full) {
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= port.bottom &&
        rect.right <= port.right
      )
    } else {
      return (
        rect.top <= port.bottom &&
        rect.left <= port.right &&
        rect.bottom >= 0 &&
        rect.right >= 0
      )
    }
  }
})

for (let method of [
  'innerHeight',
  'innerWidth',
  'outerHeight',
  'outerWidth',
  'scrollTop',
  'scrollLeft',
  'offset',
  'view'
]) {
  Pro.prototype[method] = function (param) {
    return this.length && Pro[method](this.first, param)
  }
}
