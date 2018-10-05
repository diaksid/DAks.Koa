class Pro {
  constructor (selector, context) {
    this.target = Pro.find(context)
    this.find(selector)
  }

  find (selector) {
    this.selector = selector
    this.context = this.target
    this.target = Pro.find(this.selector, this.context)
    return this
  }

  each (callback, args = null) {
    for (let i = 0; i < this.target.length; i++) {
      if (args === null) {
        if (callback.call(this.target[i], this.target[i], i) === false) {
          break
        }
      } else {
        if (callback.apply(this.target[i], args) === false) {
          break
        }
      }
    }
    return this
  }

  get length () {
    return this.target.length
  }

  get first () {
    return this.target[0]
  }

  static find (selector, context) {
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
      let arr = []
      for (let ctx of context) {
        let list = [].slice.call(ctx.querySelectorAll(selector))
        for (let el of list) {
          if (arr.indexOf(el) === -1) {
            arr.push(el)
          }
        }
      }
      return arr
    }
  }

  static assign (obj, ...args) {
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
          obj[key] = data[key]
        }
      }
    }
    return obj
  }

  static to (data) {
    return data instanceof Pro ? data : new Pro(data)
  }

  static console (type, message) {
    if (this._debug) {
      if (message === null) {
        message = type
        type = 'log'
      }
      console[type](message)
    }
    return this
  }

  static message (message) {
    return this.console(message)
  }

  static error (message) {
    return this.console('error', message)
  }

  static set debug (value) {
    this._debug = !!value
  }
}

function PRO () {
  return arguments.length ? new Pro(...arguments) : Pro
}

export { PRO, Pro }
