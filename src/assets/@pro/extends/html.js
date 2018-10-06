import { Pro } from '../pro'
import PROstyle from '../helpers/style'

Pro.assign({
  style: PROstyle
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
      Pro.to(child).each(el => {
        this.first.appendChild(el)
      })
    }
    return this
  }
}, true)
