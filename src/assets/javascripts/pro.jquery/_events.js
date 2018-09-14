module.exports = function (Cls) {
  Object.assign(Cls, {
    on: function (param, type, callback) {
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

    off: function (param, type, callback) {
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

    onready: function (param, callback) {
      if (typeof param === 'function') {
        callback = param
        param = document
      }
      param.addEventListener('DOMContentLoaded', callback)
      return this
    },

    onload: function (param, callback) {
      if (typeof param === 'function') {
        callback = param
        param = window
      }
      param.addEventListener('load', callback)
      return this
    },

    onresize: function (param, callback) {
      if (typeof param === 'function') {
        callback = param
        param = window
      }
      param.addEventListener('resize', callback)
      return this
    },

    onscroll: function (param, callback) {
      if (typeof param === 'function') {
        callback = param
        param = window
      }
      param.addEventListener('scroll', callback)
      return this
    },

    onclick: function (param, callback) {
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

  Object.assign(Cls.prototype, {
    on: function (type, callback) {
      return this.each(function () {
        this.addEventListener(type, callback)
      })
    },

    off: function (type, callback) {
      return this.each(function () {
        this.removeEventListener(type, callback)
      })
    },

    onclick: function (callback) {
      return this.each(function () {
        Cls.onclick(this, callback)
      })
    }
  })
}
