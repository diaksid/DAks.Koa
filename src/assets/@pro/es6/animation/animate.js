import { Pro } from '../pro'
import './frame'

Pro.assign({
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
    let steps = (options.duration || Pro.animation.duration) / Pro.animation.delay
    let step = (from - to) / steps
    let render = () => {
      from -= step
      el.style[property] = from + unit
      if (--steps > 0) {
        el.dataset.animate = Pro.animation.request(render, el)
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
        setTimeout(fn, 1000 / Pro.animation.delay)
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
      Pro.animation.cancel(el.dataset.animate)
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
        Pro.animate(el, { opacity: 0, duration: duration }, () => {
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
        Pro.animate(el, { opacity: 1, duration: duration }, callback)
      })
    } else {
      el.style.display = ''
      el.style.opacity = 1
    }
    return this
  }
})

Pro.assign({
  animate (options, callback) {
    return this.each(function () {
      Pro.animate(this, options, callback)
    })
  },

  queue (callback) {
    return this.each(function () {
      Pro.queue(this, callback)
    })
  },

  stop () {
    return this.each(function () {
      Pro.stop(this)
    })
  },

  hide (duration, callback) {
    return this.each(function () {
      Pro.hide(this, duration, callback)
    })
  },

  show (duration, callback) {
    return this.each(function () {
      Pro.show(this, duration, callback)
    })
  },

  toggle (duration, callback) {
    return this.each(function () {
      if (this.style.display === 'none') {
        Pro.show(this, duration, callback)
      } else {
        Pro.hide(this, duration, callback)
      }
    })
  }
}, true)
