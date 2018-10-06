import { Pro } from '../pro'
import {
  PROouterHeight,
  PROouterWidth,
  PROoffset
} from '../helpers/properties'
import PROdata from '../helpers/dataset'

const PROlazyLoad = (function () {
  const NAME = 'lazyload'
  const VERSION = '0.0.1'

  const DATA_KEY = 'lazyload'
  const EVENT_KEY = `${DATA_KEY}.`

  const Events = {
    'UPDATE': `${EVENT_KEY}update`,
    'RESET': `${EVENT_KEY}reset`,
    'APPEAR': `${EVENT_KEY}appear`
  }

  const Default = {
    attribute: 'lazy',
    duration: 1000,
    delay: 250,
    threshold: 0,
    before: null,
    after: null,
    reset: '',
    mask: "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'%3E%3Cpath fill='%23aaa' d='m204 203q0 13-9 22t-22 9-22-9-9-22 9-22 22-9 22 9 9 22zm170 64v74h-234v-32l53-53 26 26 85-85zm16-117h-266q-2 0-4 1-1 1-1 4v202q0 2 1 4 1 1 4 1h266q2 0 4-1 1-1 1-4v-202q0-2-1-4-1-1-4-1zm26 5v202q0 11-8 19t-19 8h-266q-11 0-19-8t-8-19v-202q0-11 8-19t19-8h266q11 0 19 8t8 19z'/%3E%3C/svg%3E"
    // mask: "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23ccc' fill-opacity='.2' height='100%' width='100%'/%3E%3C/svg%3E"
  }

  class PROlazyLoad {
    static update () {
      return document.dispatchEvent(Pro.newEvent(Events.UPDATE))
    }

    static reset () {
      return document.dispatchEvent(Pro.newEvent(Events.RESET))
    }

    static get name () {
      return NAME
    }

    static get version () {
      return VERSION
    }

    static get default () {
      return Default
    }

    constructor (scope, event, options) {
      if (Pro.isObject(scope)) {
        options = scope
        scope = null
      } else if (Pro.isObject(event)) {
        options = event
        event = null
      }
      this._options = Pro.assign({}, Default, options)
      this._scope = scope && new Pro(scope)
      this._event = event || 'scroll'
      if (this._scope) {
        this._scope.on(this._event, this._update.bind(this))
      }
      window.addEventListener('scroll', this._update.bind(this))
      window.addEventListener('resize', this._update.bind(this))
      document.addEventListener(Events.UPDATE, this._update.bind(this))
      document.addEventListener(Events.RESET, this._reset.bind(this))
      if (this._options.reset) {
        // document.addEventListener(this._options.reset, this._reset.bind(this))
      }
      this._items = []
    }

    load (element) {
      if (!PROdata.getSet(element, DATA_KEY)) {
        const item = new Lazy(element, this._options)
        item._appear()
        this._items.push(item)
      }
      return this
    }

    _update () {
      let counter = 0
      this._items.forEach(item => item._appear() || counter++)
      if (!counter) {
        if (this._scope) {
          this._scope.off(this._event, this._update)
        }
        window.removeEventListener('scroll', this._update)
        window.removeEventListener('resize', this._update)
        document.removeEventListener(Events.UPDATE, this._update.bind(this))
      }
      return this
    }

    _reset () {
      this._items.forEach(item => item._reset())
      this._items = []
      return this
    }
  }

  class Lazy {
    get _dataKey () {
      return PROdata.getSet(this._element, DATA_KEY)
    }

    set _dataKey (value) {
      return PROdata.setSet(this._element, DATA_KEY, value)
    }

    constructor (element, options) {
      this._element = element
      this._obj = new Pro(this._element)
      // this._scope = scope
      this._options = options
      this._delay = this._element.dataset[`${this._options.attribute}Delay`] || this._options.delay
      this._duration = this._element.dataset[`${this._options.attribute}Duration`] || this._options.duration
      this._opacity = this._element.dataset[`${this._options.attribute}Opacity`] || 1
      this._appearance = this._opacity * Pro.animation.delay / this._duration
      this._obj.on(Events.APPEAR, this._appear.bind(this))
    }

    _appear () {
      // let res = ['loading', 'loaded', 'error', 'reset'].indexOf(this._dataKey) >= 0
      let res = !!this._dataKey
      if (!res) {
        res = !this._above() && !this._below() && !this._right() && !this._left()
        if (res) {
          if (typeof this._options.before === 'function') {
            this._options.before.call(this._element)
          }
          this._loader()
          this._obj.off(Events.APPEAR, this._appear)
        }
      }
      return res
    }

    _loader () {
      const path = PROdata.getSet(this._element, this._options.attribute)
      this._dataKey = 'loading'
      if (this._options.mask) {
        if (this._element.tagName === 'IMG') {
          this._element.src = this._options.mask
        } else {
          // this._element.style.backgroundImage = `url("${this._options.mask}")`
        }
      }
      const img = new Image()
      img.onload = () => {
        this._element.style.opacity = 0
        if (this._element.tagName === 'IMG') {
          this._element.src = path
        } else {
          this._element.style.backgroundImage = `url(${path})`
        }
        setTimeout(this._animate.bind(this), this._delay)
      }
      img.onerror = () => {
        this._dataKey = 'error'
      }
      img.src = path
      return this
    }

    _above () {
      /* const val = this.options.scope
        ? this.options.scope.offset().top
        : window.pageYOffset */
      return window.pageYOffset >=
        PROouterHeight(this._element) + PROoffset(this._element).top + this._options.threshold
    }

    _below () {
      /* const val = this.options.scope
        ? this.options.scope.innerHeight() + this.options.scope.offset().top
        : window.innerHeight + window.pageYOffset */
      return window.innerHeight + window.pageYOffset <=
        PROoffset(this._element).top - this._options.threshold
    }

    _right () {
      /* const val = this.options.scope
        ? this.options.scope.innerWidth() + this.options.scope.offset().left
        : window.innerWidth + window.pageXOffset */
      return window.innerWidth + window.pageXOffset <=
        PROoffset(this._element).left - this._options.threshold
    }

    _left () {
      /* const val = this.options.scope
        ? this.options.scope.offset().left
        : window.pageXOffset */
      return window.pageXOffset >=
        PROouterWidth(this._element) + PROoffset(this._element).left + this._options.threshold
    }

    _animate () {
      this._dataKey = 'loaded'
      this._element.style.opacity = parseFloat(this._element.style.opacity) + this._appearance
      if (this._opacity - this._element.style.opacity >= this._appearance) {
        Pro.animation.request(this._animate.bind(this))
      } else {
        this._element.style.opacity = this._opacity
        if (typeof this._options.after === 'function') {
          this._options.after.call(this._element)
        }
      }
      return this
    }

    _reset () {
      if (this._element.tagName === 'IMG') {
        this._element.src = this._options.mask
      } else {
        this._element.style.backgroundImage = `url("${this._options.mask}")`
      }
      this._dataKey = 'reset'
      // delete this
    }
  }

  return PROlazyLoad
})()

export default PROlazyLoad
