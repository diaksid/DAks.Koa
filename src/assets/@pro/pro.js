const PRO = function () {
  return arguments.length ? new Pro(...arguments) : this
}

PRO.isObject = function (obj) {
  return obj !== null && typeof obj === 'object' && (!obj.constructor || obj.constructor === Object) &&
    Object.prototype.toString.call(obj) === '[object Object]'
}

PRO.assign = function (obj, ...args) {
  if (args.length > 1) {
    for (let arg of args) {
      obj = this.assign(obj, arg)
    }
  } else if (typeof obj === 'object') {
    let data = args[0]
    if (typeof args[0] !== 'object') {
      data = obj
      obj = args[0] ? this.prototype : this
    }
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        if (this.isObject(data[key]) && obj.hasOwnProperty(key) && this.isObject(obj[key])) {
          this.assign(obj[key], data[key])
        } else {
          obj[key] = data[key]
        }
      }
    }
  }
  return obj
}

PRO.assign({
  debug: false,

  to (data) {
    return data instanceof Pro ? data : new Pro(data)
  },

  tag (tag) {
    return typeof tag === 'string' && new Pro(document.createElement(tag))
  },

  count (data) {
    return data.length !== null ? data.length : [].slice.call(data).length
  },

  console (type, message) {
    if (this.debug) {
      if (message === null) {
        message = type
        type = 'log'
      }
      console[type](message)
    }
    return this
  },

  message (message) {
    return this.console(message)
  },

  error (message) {
    return this.console('error', message)
  },

  _find (selector, context) {
    if (context instanceof Node || context instanceof Window) {
      context = [context]
    } else if (context instanceof Pro) {
      context = context.target
    } else if (typeof context === 'string') {
      context = this.find(context)
    }
    context = context || [document]
    if (selector instanceof Node || selector instanceof Window) {
      return [selector]
    } else if (selector instanceof Pro) {
      return selector.target
    } else if (typeof selector === 'string') {
      let res = []
      for (let ctx of context) {
        let list = [].slice.call(ctx.querySelectorAll(selector))
        for (let el of list) {
          if (res.indexOf(el) === -1) {
            res.push(el)
          }
        }
      }
      return res
    }
  }
})

class Pro extends PRO {
  constructor (selector, context) {
    super()
    this._target = PRO._find(context)
    this.find(selector)
  }

  get length () {
    return this._target.length
  }

  get first () {
    return this._target[0]
  }

  get isConnected () {
    return this._target.every(el => el.isConnected)
  }

  find (selector) {
    this.selector = selector
    this.context = this._target
    this._target = PRO._find(this.selector, this.context)
    return this
  }

  each (callback, args = null) {
    for (let i = 0; i < this._target.length; i++) {
      if (args === null) {
        if (callback.call(this._target[i], this._target[i], i) === false) {
          break
        }
      } else {
        if (callback.apply(this._target[i], args) === false) {
          break
        }
      }
    }
    return this
  }
}

export default PRO
