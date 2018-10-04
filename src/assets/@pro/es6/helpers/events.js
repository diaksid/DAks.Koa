import { Pro } from '../pro'

Pro.assign({
  on (param, type, callback) {
    if (typeof param === 'string') {
      callback = type
      type = param
      param = document
    }
    if (param instanceof Array) {
      for (let item of param) {
        this.on(item, type, callback)
      }
    } else {
      param.addEventListener(type, callback)
    }
    return this
  },

  off (param, type, callback) {
    if (typeof param === 'string') {
      callback = type
      type = param
      param = document
    }
    if (param instanceof Array) {
      for (let item of param) {
        this.off(item, type, callback)
      }
    } else {
      param.removeEventEventListener(type, callback)
    }
    return this
  },

  onclick (param, callback) {
    if (typeof callback === 'string') {
      let url = callback
      if (/\/\//.test(url)) {
        callback = () => window.open(url, '_blank')
      } else {
        callback = () => location.assign(url)
      }
    }
    param.addEventListener('click', callback)
    return this
  }
})

Pro.assign({
  on (type, callback) {
    return this.each(function () {
      this.addEventListener(type, callback)
    })
  },

  off (type, callback) {
    return this.each(function () {
      this.removeEventListener(type, callback)
    })
  },

  onclick (callback) {
    return this.each(function () {
      Pro.onclick(this, callback)
    })
  }
}, true)
