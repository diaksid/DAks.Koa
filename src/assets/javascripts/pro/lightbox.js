import jQuery from 'jquery'

const Lightbox = (jQuery => {
  const NAME = 'lightbox'
  const VERSION = '0.0.1'

  const DATA_KEY = 'lightbox'
  const JQUERY_NO_CONFLICT = jQuery.fn[NAME]

  const Default = {
    attribute: 'light',
    padding: 0,
    delayShow: 250,
    delayHide: 250,
    delayStep: 250,
    onerror: 'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="%23c33" enable-background="new 0 0 512 512"%3E%3Cpath d="m256 96q44 0 80 21 37 21 58 58 21 37 21 80t-21 80q-21 37-58 58-37 21-80 21t-80-21q-37-21-58-58-21-37-21-80t21-80q21-37 58-58 37-21 80-21zm27 261v-40q0-3-2-5-2-2-5-2h-40q-3 0-5 2-2 2-2 5v40q0 3 2 5 2 2 5 2h40q3 0 5-2 2-2 2-5zm-0.4-72 4-130q0-3-2-4-2-2-5-2h-46q-3 0-5 2-2 1-2 4l4 130q0 2 2 4 2 2 5 2h39q3 0 5-2 2-2 2-4z"/%3E%3C/svg%3E'
  }

  class Lightbox {
    constructor (options) {
      this._options = jQuery.extend({}, Lightbox.default, options)
      this._stack = {}
      this._group = null
      this._index = 0
      Lightbox._init(this)
    }

    _load (element) {
      if (!element.dataset[DATA_KEY]) {
        const path = element.getAttribute('href') || element.dataset.href || element.getAttribute('src')
        if (path) {
          const group = (path[0] === '#') ? 'html' : element.dataset[this._options.attribute]
          if (group && group !== 'html' && group !== 'ajax') {
            if (!this._stack[group]) {
              this._stack[group] = []
            }
            if (this._stack[group].indexOf(path) === -1) {
              this._stack[group].push(path)
            }
          }
          jQuery(element).click(event => {
            event.preventDefault()
            event.stopPropagation()
            this._group = group
            this._index = this._stack[this._group].indexOf(path)
            if (group === 'html') {
              this._html()
            } else {
              this._draw()
            }
          })
          element.style.cursor = 'pointer'
        }
        element.dataset[DATA_KEY] = 'loaded'
      }
    }

    _html () {
      Lightbox._image.hide()
      Lightbox._next.hide()
      Lightbox._prev.hide()
      const element = jQuery(this._stack[this._group][this._index])[0]
      if (element) {
        Lightbox._content.addClass(`${DATA_KEY}-content--html`)
        Lightbox._modal
          .html(element.innerHTML)
          .show()
        this._show()
      }
    }

    _draw (step) {
      Lightbox._modal.hide()
      Lightbox._content.removeClass(`${DATA_KEY}-content--html`)
      if (this._group && this._stack[this._group].length > 1) {
        Lightbox._next.show()
        Lightbox._prev.show()
      } else {
        Lightbox._next.hide()
        Lightbox._prev.hide()
      }
      const element = Lightbox._image[0]
      element.src = this._stack[this._group][this._index]
      if (element.complete) {
        this._show(step)
      } else {
        element.onerror = () => {
          element.src = this._stack[this._group][this._index] = this._options.onerror
        }
        element.onload = () => this._show(step)
      }
      Lightbox._image.show()
    }

    _show (step) {
      Lightbox._show(this._options.delayShow, step)
    }

    _hide (callback) {
      if (callback) {
        Lightbox._hide(this._options.delayStep, callback)
      } else {
        Lightbox._hide(this._options.delayHide)
      }
    }

    _step (next) {
      if (next) {
        if (this._index < this._stack[this._group].length - 1) {
          ++this._index
        } else {
          this._index = 0
        }
      } else {
        if (this._index > 0) {
          --this._index
        } else {
          this._index = this._stack[this._group].length - 1
        }
      }
      this._hide(() => this._draw(true))
    }

    static _init (instance) {
      if (!this._overlay) {
        this._overlay = jQuery('<div>')
          .addClass(`${DATA_KEY}-overlay`)
          .hide()
        this._content = jQuery('<div>')
          .addClass(`${DATA_KEY}-content`)
          .click(event => event.stopPropagation())
        this._modal = jQuery('<div>')
          .addClass(`${DATA_KEY}-modal`)
          .hide()
        this._image = jQuery('<img>')
          .addClass(`${DATA_KEY}-image`)
          .hide()
        this._next = jQuery('<div>')
          .addClass(`${DATA_KEY}-next`)
          .hide()
        this._prev = jQuery('<div>')
          .addClass(`${DATA_KEY}-prev`)
          .hide()
        this._close = jQuery('<div>').addClass(`${DATA_KEY}-close`)
        this._content
          .append(this._modal)
          .append(this._image)
          .append(this._next)
          .append(this._prev)
          .append(this._close)
        this._overlay.append(this._content)
        this._body = jQuery(document.body).append(this._overlay)
      }
      this._content.css({ padding: instance._options.padding ? `${instance._options.padding}px` : '' })
      this._overlay
        .off('click')
        .click(() => instance._hide())
      this._next
        .off('click')
        .click(() => instance._step(true))
      this._prev
        .off('click')
        .click(() => instance._step())
      this._close
        .off('click')
        .click(() => instance._hide())
      return instance
    }

    static _show (delay, step) {
      if (step) {
        this._content.fadeIn(delay)
      } else {
        this._body.css({
          paddingRight: `${window.innerWidth - this._body.width()}px`,
          overflow: 'hidden'
        })
        this._overlay.fadeIn(delay)
      }
    }

    static _hide (delay, callback) {
      if (callback) {
        this._content.fadeOut(delay, callback)
      } else {
        this._overlay.fadeOut(delay, () => {
          this._body.css({
            paddingRight: '',
            overflow: ''
          })
        })
      }
    }

    static get version () {
      return VERSION
    }

    static get default () {
      return Default
    }

    static _jQuery (options) {
      const instance = new Lightbox(options)
      return this.each(function () {
        instance._load(this)
      })
    }
  }

  jQuery.fn[NAME] = Lightbox._jQuery
  jQuery.fn[NAME].Constructor = Lightbox
  jQuery.fn[NAME].noConflict = function () {
    jQuery.fn[NAME] = JQUERY_NO_CONFLICT
    return Lightbox._jQuery
  }

  return Lightbox
})(jQuery)

export default Lightbox
