module.exports = function (Cls) {
  Object.assign(Cls, {
    scrollTo: function (x, y, options, callback) {
      if (typeof options === 'function') {
        callback = options
        options = null
      }
      options = Object.assign({ duration: Cls.animation.duration }, options)
      let steps = options.duration / Cls.animation.delay
      let stepX = ((window.pageXOffset || document.documentElement.scrollLeft) - x) / steps
      let stepY = ((window.pageYOffset || document.documentElement.scrollTop) - y) / steps
      let render = () => {
        window.scrollBy(-stepX, -stepY)
        if (--steps) {
          Cls.animation.request(render, window)
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

    totop: function (options, callback) {
      if (typeof options === 'number') {
        options = { duration: options }
      }
      return this.scrollTo(0, 0, options, callback)
    },

    toobj: function (target, options, callback) {
      if (typeof options === 'number') {
        options = { margin: options }
      }
      options = Object.assign({ margin: 0 }, options)
      target = Cls.to(target)
      if (target.length) {
        this.scrollTo(0, target.offset().top - options.margin, options, callback)
      }
      return this
    },

    scroll: function (options = {}, callback) {
      if (typeof options === 'function') {
        callback = options
        options = {}
      } else if (typeof options === 'string') {
        options = { selector: options }
      }
      new Cls(options.selector || '[data-scroll]')
        .deactive()
        .onclick(function () {
          let selector = this.dataset.scroll || this.getAttribute('href')
          if (selector &&
            !this.classList.contains('is-active') &&
            !this.parentNode.classList.contains('is-active')) {
            selector === '#' ? Cls.totop(options, callback) : Cls.toobj(selector, options, callback)
          }
        })
      return this
    },

    animate: function (el, options, callback) {
      if (typeof el === 'string') {
        el = document.querySelector(el)
      }
      let property = Object.keys(options)[0]
      let style = window.getComputedStyle(el, null)[property]
      let unit = options.unit || style.match(/([0-9,.]+)([a-z]*)/)[2]
      let to = options[property]
      let from = options.from || parseInt(style, 10)
      if (options.from) {
        el.style[property] = from + unit
      }
      let steps = (options.duration || Cls.animation.duration) / Cls.animation.delay
      let step = (from - to) / steps
      let render = () => {
        from -= step
        el.style[property] = from + unit
        if (--steps > 0) {
          el.dataset.animate = Cls.animation.request(render, el)
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

    queue: function (el, callback) {
      if (typeof el === 'string') {
        el = document.querySelector(el)
      }
      let fn = () => {
        if (el.dataset.animate) {
          setTimeout(fn, 1000 / Cls.animation.delay)
        } else {
          callback()
        }
      }
      fn()
      return this
    },

    stop: function (el) {
      if (typeof el === 'string') {
        el = document.querySelector(el)
      }
      if (el.dataset.animate) {
        Cls.animation.cancel(el.dataset.animate)
        delete el.dataset.animate
      }
      return this
    },

    hide: function (el, duration, callback) {
      if (typeof el === 'string') {
        el = document.querySelector(el)
      }
      if (typeof duration === 'function') {
        callback = duration
        duration = 0
      }
      return this.queue(el, () => {
        Cls.animate(el, { opacity: 0, duration: duration }, () => {
          el.style.display = 'none'
          if (typeof callback === 'function') {
            callback.call(el)
          }
        })
      })
    },

    show: function (el, duration, callback) {
      if (typeof el === 'string') {
        el = document.querySelector(el)
      }
      if (typeof duration === 'function') {
        callback = duration
        duration = 0
      }
      return this.queue(el, () => {
        if (el.style.display === 'none') {
          el.style.display = ''
          el.style.opacity = '0'
        }
        Cls.animate(el, { opacity: 1, duration: duration }, callback)
      })
    }
  })

  Object.assign(Cls.prototype, {
    animate: function (options, callback) {
      this.each(function () {
        Cls.animate(this, options, callback)
      })
    },

    queue: function (callback) {
      this.each(function () {
        Cls.queue(this, callback)
      })
    },

    stop: function () {
      this.each(function () {
        Cls.stop(this)
      })
    },

    hide: function (duration, callback) {
      this.each(function () {
        Cls.hide(this, duration, callback)
      })
    },

    show: function (duration, callback) {
      this.each(function () {
        Cls.show(this, duration, callback)
      })
    },

    toggle: function (duration, callback) {
      this.each(function () {
        if (this.style.display === 'none') {
          Cls.show(this, duration, callback)
        } else {
          Cls.hide(this, duration, callback)
        }
      })
    }
  })
}
