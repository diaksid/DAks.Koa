import $ from 'jquery'

const ProLightbox = ($ => {
  class ProLightbox {
    constructor (selector, options) {
      this.options = Object.assign({}, {
        padding: 0,
        show: 250,
        hide: 250,
        step: 250
      }, options)

      this.overlay = document.createElement('div')
      this.overlay.className = 'lightbox-overlay'
      this.overlay.style.display = 'none'
      this.overlay.addEventListener('click', () => this.hide())

      this.content = document.createElement('div')
      this.content.className = 'lightbox-content'
      this.content.addEventListener('click', (event) => event.stopPropagation())
      this.overlay.appendChild(this.content)

      this.next = document.createElement('div')
      this.next.className = 'lightbox-next'
      this.next.style.display = 'none'
      this.next.addEventListener('click', () => this.step(true))
      this.content.appendChild(this.next)

      this.prev = document.createElement('div')
      this.prev.className = 'lightbox-prev'
      this.prev.style.display = 'none'
      this.prev.addEventListener('click', () => this.step())
      this.content.appendChild(this.prev)

      this.close = document.createElement('div')
      this.close.className = 'lightbox-close'
      this.close.addEventListener('click', () => this.hide())
      this.content.appendChild(this.close)

      this.load(selector)
    }

    load (selector) {
      this.target = selector ? PRO.to(selector) : new PRO('[data-lightbox]')
      this.stack = {}
      this.group = this.path = ''
      for (let el of this.target.target) {
        this.item(el)
      }
      if (this.options.padding) {
        this.content.style.padding = '%ipx' % this.options.padding
      }
      document.body.appendChild(this.overlay)
      return this
    }

    item (el) {
      const path = el.href || el.dataset.href || el.dataset.lightboxHref || el.src
      const group = path[0] === '#' ? 'html' : el.dataset.lightbox
      if (group && group !== 'html' && group !== 'ajax') {
        if (!this.stack[group]) {
          this.stack[group] = []
        }
        this.stack[group].push(path)
      }
      el.addEventListener('click', event => {
        event.preventDefault()
        event.stopPropagation()
        this.path = path
        this.group = group
        if (group === 'html') {
          this.html()
        } else {
          this.draw()
        }
        return false
      })
    }

    html () {
      if (this.image) {
        this.image.style.display = 'none'
      }
      this.content.className = 'lightbox-content lightbox-html'
      this.next.style.display = this.prev.style.display = 'none'
      if (!this.modal) {
        this.modal = document.createElement('div')
        this.modal.className = 'lightbox-modal'
        this.content.appendChild(this.modal)
      }
      this.modal.style.display = ''
      let el = new PRO(this.path)[0]
      if (el) {
        this.modal.innerHTML = el.innerHTML
        this.show()
      }
    }

    draw (step) {
      if (this.modal) {
        this.modal.style.display = 'none'
      }
      this.content.className = 'lightbox-content lightbox-draw'
      if (!this.image) {
        this.image = document.createElement('img')
        this.image.className = 'lightbox-image'
        this.content.appendChild(this.image)
        let fn = () => {
          this.image.style.maxHeight = `${Math.floor(window.innerHeight * 0.9)}px`
        }
        fn()
        PRO.onresize(fn)
      }
      if (this.group && this.stack[this.group].length > 1) {
        this.next.style.display = this.prev.style.display = ''
      } else {
        this.next.style.display = this.prev.style.display = 'none'
      }
      this.image.src = this.path
      this.image.style.display = ''
      if (this.image.complete) {
        this.show(step)
      } else {
        this.image.onload = () => this.show(step)
      }
    }

    show (step) {
      if (step) {
        new PRO(this.content).show(this.options.step)
      } else {
        new PRO(this.overlay).show(this.options.show)
      }
    }

    hide (cb) {
      if (cb) {
        new PRO(this.content).hide(this.options.step, cb)
      } else {
        new PRO(this.overlay).hide(this.options.show)
      }
    }

    step (next) {
      let idx = this.stack[this.group].indexOf(this.path)
      if (next) {
        if (idx < this.stack[this.group].length - 1) {
          ++idx
        } else {
          idx = 0
        }
      } else {
        if (idx > 0) {
          --idx
        } else {
          idx = this.stack[this.group].length - 1
        }
      }
      this.hide(() => {
        this.path = this.stack[this.group][idx]
        this.draw(true)
      })
    }
  }

  return ProLightbox
})($)

export default ProLightbox
