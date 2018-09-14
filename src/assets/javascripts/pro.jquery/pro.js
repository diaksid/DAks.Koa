class PRO {
  static get debug () {
    return this._debug
  }

  static set debug (value) {
    this._debug = value
  }

  static console (type, message) {
    if (this.debug) {
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

  static find (selector, context) {
    if (context instanceof Node || context instanceof Window) {
      context = [context]
    } else if (context instanceof PRO) {
      context = context.target
    } else if (typeof context === 'string') {
      context = this.find(context)
    }
    context = context || [document]
    if (selector instanceof Node || selector instanceof Window) {
      return [selector]
    } else if (selector instanceof PRO) {
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

  static assign (obj, prototype = false) {
    if (obj instanceof Object) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (prototype) {
            this.prototype[key] = obj[key]
          } else {
            this[key] = obj[key]
          }
        }
      }
    }
  }

  find (selector) {
    this.selector = selector
    this.context = this.target
    this.target = PRO.find(this.selector, this.context)
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

  constructor (selector, context) {
    this.target = PRO.find(context)
    this.find(selector)
  }
}

require('./_utils')(PRO)
require('./_properties')(PRO)
require('./_events')(PRO)
require('./_animation')(PRO)
require('./_tweens')(PRO)
require('./_extend')(PRO)

export default PRO
