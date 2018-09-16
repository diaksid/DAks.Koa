import $ from 'jquery'

const ProLazyload = ($ => {
  const NAME = 'lazyload'
  const VERSION = '0.0.3'
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const DATA_KEY = 'lazyload'
  const EVENT_KEY = `pro.${DATA_KEY}`

  const Default = {
    threshold: 0,
    attribute: 'lazy',
    event: 'scroll',
    duration: 1000,
    delay: 250,
    before: null,
    after: null,
    eventReset: null,
    mask: 'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"%3E%3Cpath fill="%23aaa" d="m204 203q0 13-9 22t-22 9-22-9-9-22 9-22 22-9 22 9 9 22zm170 64v74h-234v-32l53-53 26 26 85-85zm16-117h-266q-2 0-4 1-1 1-1 4v202q0 2 1 4 1 1 4 1h266q2 0 4-1 1-1 1-4v-202q0-2-1-4-1-1-4-1zm26 5v202q0 11-8 19t-19 8h-266q-11 0-19-8t-8-19v-202q0-11 8-19t19-8h266q11 0 19 8t8 19z"/%3E%3C/svg%3E'
    // mask: 'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23ccc" fill-opacity=".2" height="100%" width="100%"/%3E%3C/svg%3E'
  }

  class ProLazyload {
    constructor (scope, options) {
      if ($.isPlainObject(scope)) {
        options = scope
        scope = null
      }
      this._scope = scope && $(scope)
      this._options = $.extend({}, Default, options)
      if (this._scope) {
        this._scope.on(this._options.event, this._update.bind(this))
      } else {
        window.addEventListener(this._options.event, this._update.bind(this))
      }
      window.addEventListener('resize', this._update.bind(this))
      if (this._options.eventReset) {
        document.addEventListener(this._options.eventReset, this._reset.bind(this))
      }
      this._items = []
    }

    _load (element) {
      const item = new Lazy(element, this._scope, this._options)
      item._appear() || this._items.push(item)
      return this
    }

    _update () {
      let counter = 0
      this._items.forEach(item => item._appear() || counter++)
      if (!counter) {
        if (this._scope) {
          this._scope.off(this._options.event, this._update)
        } else {
          window.removeEventListener(this._options.event, this._update)
        }
        window.removeEventListener('resize', this._update)
      }
      return this
    }

    _reset () {
      this._items.forEach(item => item._reset())
      return this
    }

    static get VERSION () {
      return VERSION
    }

    static get Default () {
      return Default
    }

    static _jQuery (scope, options) {
      const instance = new ProLazyload(scope, options)
      return this.each(function () {
        instance._load(this)
      })
    }
  }

  class Lazy {
    constructor (element, scope, options) {
      this._element = element
      this._$ = $(this._element)
      this._scope = scope
      this._options = options
      this._delay = this._element.dataset[`${this._options.attribute}Delay`] || this._options.delay
      this._duration = this._element.dataset[`${this._options.attribute}Duration`] || this._options.duration
      this._$.on(EVENT_KEY, this._appear.bind(this))
    }

    _appear () {
      let res = ['loading', 'loaded', 'error'].indexOf(this._key) >= 0
      if (!res) {
        res = !this._above() && !this._below() && !this._right() && !this._left()
        if (res) {
          if (typeof this._options.before === 'function') {
            this._options.before.call(this._element)
          }
          this._loader()
          this._$.off('lazyload', this._appear)
        }
      }
      return res
    }

    _loader () {
      const data = this._element.dataset[this._options.attribute]
      this._key = 'loading'
      if (this._options.mask) {
        if (this._element.tagName === 'IMG') {
          this._element.src = this._options.mask
        } else {
          // TODO: backgroundImage mask
          // this.el.style.backgroundImage = `url("${this._options.mask}")`
        }
      }
      const img = new Image()
      img.onload = () => {
        if (this._element.tagName === 'IMG') {
          this._element.src = data
        } else {
          this._element.style.backgroundImage = `url(${data})`
        }
        setTimeout(this._animate.bind(this), this._delay)
      }
      img.onerror = () => {
        this._key = 'error'
      }
      img.src = data
      return this
    }

    _above () {
      const val = this._scope
        ? this._scope.offset().top
        : window.pageYOffset
      return val >= this._$.outerHeight() + this._$.offset().top + this._options.threshold
    }

    _below () {
      const val = this._scope
        ? this._scope.innerHeight() + this._scope.offset().top
        : window.innerHeight + window.pageYOffset
      return val <= this._$.offset().top - this._options.threshold
    }

    _right () {
      const val = this._scope
        ? this._scope.innerWidth() + this._scope.offset().left
        : window.innerWidth + window.pageXOffset
      return val <= this._$.offset().left - this._options.threshold
    }

    _left () {
      const val = this._scope
        ? this._scope.offset().left
        : window.pageXOffset
      return val >= this._$.outerWidth() + this._$.offset().left + this._options.threshold
    }

    _animate () {
      this._key = 'loaded'
      this._$
        .hide()
        .fadeIn(
          this._duration,
          () => typeof this._options.after === 'function' && this._options.after.call(this._element)
        )
      return this
    }

    _reset () {
      if (this._element.tagName === 'IMG') {
        this._element.src = this._options.mask
      } else {
        this._element.style.backgroundImage = `url("${this._options.mask}")`
      }
      this._key = null
    }

    get _key () {
      return this._element.dataset[DATA_KEY]
    }

    set _key (val) {
      return (this._element.dataset[DATA_KEY] = val)
    }
  }

  $.fn[NAME] = ProLazyload._jQuery
  $.fn[NAME].Constructor = ProLazyload
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return ProLazyload._jQuery
  }

  return ProLazyload
})($)

export default ProLazyload
