import PRO from '../pro'
import '../extends/deactive'

const documentElement = document.documentElement

PRO.assign({
  scroll (x, y, options, callback) {
    if (typeof options === 'function') {
      callback = options
      options = null
    }
    options = PRO.assign({ duration: PRO.tweens.duration }, options)
    let steps = options.duration / PRO.tweens.delay
    let stepX = ((window.pageXOffset || documentElement.scrollLeft) - x) / steps
    let stepY = ((window.pageYOffset || documentElement.scrollTop) - y) / steps
    let render = () => {
      window.scrollBy(-stepX, -stepY)
      if (--steps) {
        PRO.tweens.request(render, window)
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

  scrollToTop (options, callback) {
    if (typeof options === 'number') {
      options = { duration: options }
    }
    return this.scroll(0, 0, options, callback)
  },

  scrollToObj (obj, options, callback) {
    if (typeof options === 'number') {
      options = { margin: options }
    }
    options = this.assign({ margin: 0 }, options)
    obj = this.to(obj)
    if (obj.length) {
      this.scroll(0, obj.offset().top - options.margin, options, callback)
    }
    return this
  },

  scrollTo (options = {}, callback) {
    if (typeof options === 'function') {
      callback = options
      options = {}
    } else if (typeof options === 'string') {
      options = { selector: options }
    }
    PRO(options.selector || '[data-scroll-to]')
      .deactive()
      .onclick(function () {
        let selector = this.dataset.scrollTo || this.getAttribute('href')
        if (selector &&
          !this.classList.contains('is-active') &&
          !this.parentNode.classList.contains('is-active')) {
          selector === '#' ? PRO.scrollToTop(options, callback) : PRO.scrollToObj(selector, options, callback)
        }
      })
    return this
  }
})
