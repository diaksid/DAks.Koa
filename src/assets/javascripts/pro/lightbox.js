import $ from 'jquery'

const ProLightbox = ($ => {
  const NAME = 'lightbox'
  const VERSION = '0.0.1'
  const DATA_KEY = 'lightbox'
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const Default = {
    padding: 0,
    delayShow: 250,
    delayHide: 250,
    delayStep: 250
  }

  class ProLightbox {
    constructor (options) {
      this._options = $.extend(Default, options)
      this._stack = {}
      this._path = null
      this._group = null
      ProLightbox._init(this)
    }

    _load (element) {
      const path = element.getAttribute('href') || element.dataset.href || element.getAttribute('src')
      if (path) {
        const group = (path[0] === '#') ? 'html' : element.dataset[DATA_KEY]
        if (group && group !== 'html' && group !== 'ajax') {
          if (!this._stack[group]) {
            this._stack[group] = []
          }
          this._stack[group].push(path)
        }
        $(element)
          .addClass('lightbox')
          .click(event => {
            event.preventDefault()
            event.stopPropagation()
            this._path = path
            this._group = group
            if (group === 'html') {
              this._html()
            } else {
              this._draw()
            }
          })
      }
      delete element.dataset[DATA_KEY]
    }

    _html () {
      ProLightbox._image.hide()
      ProLightbox._next.hide()
      ProLightbox._prev.hide()
      const element = $(this.path).get(0)
      if (element) {
        ProLightbox._content.addClass('lightbox-html')
        ProLightbox._modal
          .html(element.innerHTML)
          .show()
        this._show()
      }
    }

    _draw (step) {
      ProLightbox._modal.hide()
      ProLightbox._content.removeClass('lightbox-html')
      if (this._group && this._stack[this._group].length > 1) {
        ProLightbox._next.show()
        ProLightbox._prev.show()
      } else {
        ProLightbox._next.hide()
        ProLightbox._prev.hide()
      }
      ProLightbox._image.attr('src', this._path)
      ProLightbox._image.show()
      const element = ProLightbox._image.get(0)
      if (element.complete) {
        this._show(step)
      } else {
        element.onload = () => this._show(step)
      }
    }

    _show (step) {
      ProLightbox._show(this._options.delayShow, step)
    }

    _hide (callback) {
      if (callback) {
        ProLightbox._hide(this._options.delayStep, callback)
      } else {
        ProLightbox._hide(this._options.delayHide)
      }
    }

    _step (next) {
      let idx = this._stack[this._group].indexOf(this._path)
      if (next) {
        if (idx < this._stack[this._group].length - 1) {
          ++idx
        } else {
          idx = 0
        }
      } else {
        if (idx > 0) {
          --idx
        } else {
          idx = this._stack[this._group].length - 1
        }
      }
      this._hide(() => {
        this._path = this._stack[this._group][idx]
        this._draw(true)
      })
    }

    static _init (instance) {
      if (!this._overlay) {
        this._overlay = $('<div>')
          .addClass('lightbox-overlay')
          .hide()
        this._content = $('<div>')
          .addClass('lightbox-content')
          .click(event => event.stopPropagation())
        this._modal = $('<div>')
          .addClass('lightbox-modal')
          .hide()
        this._image = $('<img>')
          .addClass('lightbox-image')
          .hide()
        this._next = $('<div>')
          .addClass('lightbox-next')
          .hide()
        this._prev = $('<div>')
          .addClass('lightbox-prev')
          .hide()
        this._close = $('<div>').addClass('lightbox-close')
        this._content
          .append(this._modal)
          .append(this._image)
          .append(this._next)
          .append(this._prev)
          .append(this._close)
        this._overlay
          .append(this._content)
          .appendTo(document.body)
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
        this._overlay.fadeIn(delay)
      }
    }

    static _hide (delay, callback) {
      if (callback) {
        this._content.fadeOut(delay, callback)
      } else {
        this._overlay.fadeOut(delay)
      }
    }

    static get VERSION () {
      return VERSION
    }

    static get Default () {
      return Default
    }

    static _jQuery (options) {
      const instance = new ProLightbox(options)
      return this.each(function () {
        this.dataset[DATA_KEY] && instance._load(this)
      })
    }
  }

  $.fn[NAME] = ProLightbox._jQuery
  $.fn[NAME].Constructor = ProLightbox
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return ProLightbox._jQuery
  }

  return ProLightbox
})($)

export default ProLightbox
