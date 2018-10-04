import { Pro } from '../pro'
import '../extends/assets'

const Default = {
  selector: '.c-ymap',
  zoom: 14,
  type: 'yandex#map',
  behaviors: ['default'],
  controls: ['default'],
  preset: 'islands#redDotIcon'
}

class Ymaps {
  constructor (options) {
    this.options = Pro.assign({}, Default, options)
  }

  load (selector) {
    this.select = Pro.to(selector || this.options.selector)
    if (this.select.length) {
      const fn = () => ymaps.ready(() => this.select.each(el => this._ymap(el)))
      if (window.ymaps) {
        fn()
      } else {
        Pro.script(`//api-maps.yandex.ru/2.1/?lang=${this.options.locale || 'ru_RU'}`, fn)
      }
    }
    return this.select
  }

  _ymap (el) {
    const fn = (name, separator = ' ') => {
      const data = el.dataset[name]
      if (data === '') {
        return []
      } else if (data && separator) {
        return data.split(separator)
      } else {
        return data || this.options[name]
      }
    }
    const fz = () => {
      let value = parseInt(el.dataset.zoom || this.options.zoom)
      switch (true) {
        case window.innerWidth >= 768:
          value += 2
          break
        case window.innerWidth >= 480:
          value += 1
      }
      return value
    }
    if (!el.querySelector('ymaps')) {
      const map = new ymaps.Map(el, {
        type: fn('type'),
        center: fn('center'),
        zoom: fz(),
        behaviors: fn('behaviors'),
        controls: fn('controls')
      })
      map.geoObjects.add(new ymaps.Placemark(fn('placemark'), {
        iconContent: null,
        balloonContent: `<h6>${fn('name', null)}</h6><div>${fn('info', null)}</div>`
      }, {
        preset: fn('preset'),
        draggable: false,
        hideIconOnBalloonOpen: false
      }))
      el.addEventListener('resize', () => {
        if (map.container) {
          map.container.fitToViewport()
        }
      })
    }
  }
}

function PROymaps (selector, options) {
  if (Pro.isObject(selector)) {
    options = selector
    selector = null
  }
  this.Ymaps = this.Ymaps || new Ymaps(options)
  return this.Ymaps.load(selector)
}

export default PROymaps
