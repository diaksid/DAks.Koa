const PROdata = {
  toKey (str, suffix) {
    if (suffix) {
      str += '.' + suffix
    }
    return str.toLowerCase().replace(/[._\s]+(.)?/g, (match, chr) => chr ? '-' + chr : '')
  },

  toSet (str, suffix) {
    if (suffix) {
      str += '.' + suffix
    }
    return str.toLowerCase().replace(/[._\-\s]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
  },

  getSet (element, key, ...args) {
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
  },

  setSet (element, key, value) {
    return (element.dataset[this.toSet(key)] = value)
  }
}

export default PROdata
