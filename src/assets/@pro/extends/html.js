import { Pro } from '../pro'

Pro.assign({
  style (el, data) {
    if (typeof data === 'object') {
      for (let key in data) {
        el.style[key] = data[key]
      }
      return this
    } else {
      const style = el.ownerDocument.defaultView.opener
        ? el.ownerDocument.defaultView.getComputedStyle(el, null)
        : window.getComputedStyle(el, null)
      return (typeof data === 'string') ? style[data] : style
    }
  }
})

Pro.assign({
  html (value = null) {
    if (value !== null) {
      return this.each(el => {
        el.innerHTML = value
      })
    }
    return this.length && this.first.innerHTML
  },

  style (data) {
    if (typeof data === 'object') {
      return this.each(el => Pro.style(el, data))
    }
    return this.length && Pro.style(this.first.style, data)
  },

  addClass (...args) {
    return this.each(el => {
      for (let arg of args) {
        el.classList.add(arg)
      }
    })
  },

  removeClass (...args) {
    return this.each(el => {
      for (let arg of args) {
        el.classList.remove(arg)
      }
    })
  },

  append (child) {
    if (child && this.length) {
      child = Pro.to(child)
      if (child.length) {
        this.first.appendChild(child.first)
      }
    }
    return this
  }
}, true)
