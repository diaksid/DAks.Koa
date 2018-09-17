import jQuery from 'jquery'

const ScrollTo = (jQuery => {
  const NAME = 'scrollTo'
  const VERSION = '0.0.1'

  const DATA_KEY = 'scroll'
  const JQUERY_NO_CONFLICT = jQuery.fn[NAME]

  const Default = {
    offset: 0,
    duration: 1000
  }

  class ScrollTo {
    constructor () {
      [this._options, this._callback] = arguments
    }

    _load (element) {
      const selector = element.dataset[DATA_KEY] || element.getAttribute('href')
      if (selector) {
        const obj = jQuery(element).click(event => {
          event.preventDefault()
          event.stopPropagation()
          if (!obj.hasClass('active') && !obj.parent().hasClass('active')) {
            selector === '#'
              ? ScrollTo.top(this._options, this._callback)
              : ScrollTo.obj(selector, this._options, this._callback)
          }
        })
      } else {
        delete element.dataset[DATA_KEY]
      }
    }

    static top () {
      const [options, callback] = this._config(...arguments)
      this._scrolled.animate({ scrollTop: options.offset }, options.duration, callback)
      return this
    }

    static obj (selector, ...args) {
      const [options, callback] = this._config(...args)
      const obj = selector instanceof jQuery ? selector : jQuery(selector)
      this._scrolled.animate({ scrollTop: obj.offset().top - options.offset }, options.duration, callback)
      return this
    }

    static _config (options, callback) {
      if (typeof options === 'function') {
        callback = options
        options = {}
      } else if (typeof options === 'number') {
        options = { offset: options }
      }
      return [
        jQuery.extend({}, this.default, options),
        typeof callback === 'function' ? callback : false
      ]
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

    static _jQuery (options) {
      const instance = new ScrollTo(options)
      return this.each(function () {
        instance._load(this)
      })
    }
  }

  jQuery.fn[NAME] = ScrollTo._jQuery
  jQuery.fn[NAME].Constructor = ScrollTo
  jQuery.fn[NAME].noConflict = function () {
    jQuery.fn[NAME] = JQUERY_NO_CONFLICT
    return ScrollTo._jQuery
  }
  jQuery[NAME] = () => jQuery(`[data-${DATA_KEY}]`)[NAME]()

  return ScrollTo
})(jQuery)

export default ScrollTo
