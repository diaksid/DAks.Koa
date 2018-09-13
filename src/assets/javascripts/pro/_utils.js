module.exports = function (Cls) {
  Object.assign(Cls, {
    to: function (data) {
      return (data && !(data instanceof Cls)) ? new Cls(data) : data
    },

    isObject: function (obj) {
      return typeof obj === 'object' && (!obj.constructor || obj.constructor === Object) &&
        Object.prototype.toString.call(obj) === '[object Object]'
    },

    fromJSON: function (data) {
      if (typeof data === 'string' && data.match(/\[(.+)\]/)) {
        return JSON.parse(data)
      }
    },

    toJSON: function (data) {
      return JSON.stringify(data)
    },

    count: function (data) {
      return data.length !== null ? data.length : [].slice.call(data).length
    }
  })
}
