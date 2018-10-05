import { Pro } from '../pro'
import './frame'
import '../extends/properties'

Pro.assign({
  scrollTo (x, y, options, callback) {
    if (typeof options === 'function') {
      callback = options
      options = null
    }
    options = Pro.assign({ duration: Pro.animation.duration }, options)
    let steps = options.duration / Pro.animation.delay
    const stepX = ((window.pageYOffset || document.documentElement.scrollTop) - x) / steps
    const stepY = ((window.pageXOffset || document.documentElement.scrollLeft) - y) / steps
    const render = () => {
      window.scrollBy(-stepX, -stepY)
      if (--steps) {
        Pro.animation.request(render, window)
      } else {
        window.scrollTo(x, y)
        if (typeof callback === 'function') {
          callback.call(window)
        }
      }
    }
    if (stepX || stepY) {
      steps = Math.round(steps)
      render()
    }
    return this
  },

  totop (options, callback) {
    if (typeof options === 'number') {
      options = { duration: options }
    }
    return Pro.scrollTo(0, 0, options, callback)
  },

  toobj (obj, options, callback) {
    if (typeof options === 'number') {
      options = { margin: options }
    }
    options = Pro.assign({ margin: 0 }, options)
    obj = Pro.to(obj)
    if (obj.length) {
      Pro.scrollTo(0, obj.offset().top - options.margin, options, callback)
    }
    return this
  },

  scroll (options = {}, callback) {
    if (typeof options === 'function') {
      callback = options
      options = {}
    } else if (typeof options === 'string') {
      options = { selector: options }
    }
    new Pro(options.selector || '[data-scroll]')
      .deactive()
      .onclick(function () {
        const selector = this.dataset.scroll || this.getAttribute('href')
        if (selector &&
          !this.classList.contains('is-active') &&
          !this.parentNode.classList.contains('is-active')) {
          selector === '#' ? Pro.totop(options, callback) : Pro.toobj(selector, options, callback)
        }
      })
    return this
  }
})
