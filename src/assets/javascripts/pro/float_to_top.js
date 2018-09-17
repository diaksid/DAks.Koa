import jQuery from 'jquery'
import ScrollTo from './scroll_to'

const FloatToTop = (jQuery => {
  const NAME = 'floatToTop'
  const VERSION = '0.0.1'

  const DATA_KEY = 'float-to-top'
  const JQUERY_NO_CONFLICT = jQuery.fn[NAME]

  const Default = {
    breakpoint: 200,
    offset: 0,
    duration: 1000,
    class: 'show'
  }

  class FloatToTop {
    constructor (options, callback) {
      if (typeof options === 'function') {
        callback = options
        options = {}
      } else if (typeof options === 'number') {
        options = { breakpoint: options }
      }
      this._options = jQuery.extend({}, FloatToTop.default, options)
      this._callback = typeof callback === 'function' ? callback : false
    }

    _load (element) {
      const fn = () => {
        if (window.pageYOffset > this._options.breakpoint) {
          element.classList.add(this._options.class)
        } else {
          element.classList.remove(this._options.class)
        }
      }
      element.addEventListener('click', event => {
        event.preventDefault()
        event.stopPropagation()
        ScrollTo.top(this._options, this._callback)
      })
      window.addEventListener('load', fn)
      window.addEventListener('scroll', fn)
    }

    static get _scrolled () {
      return jQuery('html:not(:animated), body:not(:animated)')
    }

    static get version () {
      return VERSION
    }

    static get default () {
      return Default
    }

    static _jQuery () {
      const instance = new FloatToTop(...arguments)
      return this.each(function () {
        instance._load(this)
      })
    }
  }

  jQuery.fn[NAME] = FloatToTop._jQuery
  jQuery.fn[NAME].Constructor = FloatToTop
  jQuery.fn[NAME].noConflict = function () {
    jQuery.fn[NAME] = JQUERY_NO_CONFLICT
    return FloatToTop._jQuery
  }
  jQuery[NAME] = () => jQuery(`[data-${DATA_KEY}]`)[NAME]()

  return FloatToTop
})(jQuery)

export default FloatToTop
