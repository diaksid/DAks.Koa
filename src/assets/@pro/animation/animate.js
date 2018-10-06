import PRO from '../pro'
import './frame'

PRO.assign({
  animate (el, options, callback) {
    if (typeof el === 'string') {
      el = document.querySelector(el)
    }
    let property = Object.keys(options)[0]
    let style = window.getComputedStyle(el, null)[property]
    let unit = options.unit || (/([0-9,.]+)([a-z]+)/.test(style) ? style.match(/([0-9,.]+)([a-z]+)/)[2] : '')
    let to = options[property]
    let from = options.from || parseInt(style, 10)
    if (options.from) {
      el.style[property] = from + unit
    }
    let steps = (options.duration || PRO.animation.duration) / PRO.animation.delay
    let step = (from - to) / steps
    let render = () => {
      from -= step
      el.style[property] = from + unit
      if (--steps > 0) {
        el.dataset.animate = PRO.animation.request(render, el)
      } else {
        el.style[property] = to + unit
        delete el.dataset.animate
        if (typeof callback === 'function') {
          callback.call(el)
        }
      }
    }
    if (step) {
      steps = Math.round(steps)
    }
    render()
    return this
  },

  queue (el, callback) {
    if (typeof el === 'string') {
      el = document.querySelector(el)
    }
    let fn = () => {
      if (el.dataset.animate) {
        setTimeout(fn, 1000 / PRO.animation.delay)
      } else if (typeof callback === 'function') {
        callback()
      }
    }
    fn()
    return this
  },

  stop (el) {
    if (typeof el === 'string') {
      el = document.querySelector(el)
    }
    if (el.dataset.animate) {
      PRO.animation.cancel(el.dataset.animate)
      delete el.dataset.animate
    }
    return this
  },

  hide (el, duration = 0, callback = null) {
    if (typeof el === 'string') {
      el = document.querySelector(el)
    }
    if (typeof duration === 'function') {
      callback = duration
      duration = 0
    }
    if (duration) {
      this.queue(el, () => {
        PRO.animate(el, { opacity: 0, duration: duration }, () => {
          el.style.display = 'none'
          if (typeof callback === 'function') {
            callback.call(el)
          }
        })
      })
    } else {
      el.style.display = 'none'
      el.style.opacity = 0
    }
    return this
  },

  show (el, duration = 0, callback = null) {
    if (typeof el === 'string') {
      el = document.querySelector(el)
    }
    if (typeof duration === 'function') {
      callback = duration
      duration = 0
    }
    if (duration) {
      this.queue(el, () => {
        if (el.style.display === 'none') {
          el.style.display = ''
          el.style.opacity = 0
        }
        PRO.animate(el, { opacity: 1, duration: duration }, callback)
      })
    } else {
      el.style.display = ''
      el.style.opacity = 1
    }
    return this
  }
})

PRO.assign({
  animate (options, callback) {
    return this.each(function () {
      PRO.animate(this, options, callback)
    })
  },

  queue (callback) {
    return this.each(function () {
      PRO.queue(this, callback)
    })
  },

  stop () {
    return this.each(function () {
      PRO.stop(this)
    })
  },

  hide (duration, callback) {
    return this.each(function () {
      PRO.hide(this, duration, callback)
    })
  },

  show (duration, callback) {
    return this.each(function () {
      PRO.show(this, duration, callback)
    })
  },

  toggle (duration, callback) {
    return this.each(function () {
      if (this.style.display === 'none') {
        PRO.show(this, duration, callback)
      } else {
        PRO.hide(this, duration, callback)
      }
    })
  }
}, true)
