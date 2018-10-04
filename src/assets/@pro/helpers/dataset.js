class PROdata {
  static toKey (str, suffix) {
    if (suffix) {
      str += '.' + suffix
    }
    return str.toLowerCase().replace(/[._\s]+(.)?/g, (match, chr) => chr ? '-' + chr : '')
  }

  static toSet (str, suffix) {
    if (suffix) {
      str += '.' + suffix
    }
    return str.toLowerCase().replace(/[._\-\s]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
  }

  static getSet (element, key, ...args) {
    if (args.length) {
      const data = {}
      args.forEach((arg) => {
        const value = element.dataset[this.toSet(key, arg)]
        if (typeof value !== 'undefined' && value !== null) {
          data[arg] = value
        }
      })
      return data
    } else {
      return element.dataset[this.toSet(key)]
    }
  }

  static setSet (element, key, value) {
    return (element.dataset[this.toSet(key)] = value)
  }
}

export default PROdata
