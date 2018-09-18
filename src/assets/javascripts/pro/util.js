import jQuery from 'jquery'

const Util = ((jQuery) => {
  const Util = {
    toDataKey (string, suffix) {
      if (suffix) {
        string += '.' + suffix
      }
      return string.toLowerCase().replace(/[._\s]+(.)?/g, (match, chr) => chr ? '-' + chr : '')
    },

    toDataSet (string, suffix) {
      if (suffix) {
        string += '.' + suffix
      }
      return string.toLowerCase().replace(/[._\-\s]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
    },

    getDataSet (element, key, ...args) {
      if (args.length) {
        const data = {}
        args.forEach((arg) => {
          const value = element.dataset[Util.toDataSet(key, arg)]
          if (typeof value !== 'undefined' && value !== null) {
            data[arg] = value
          }
        })
        return data
      } else {
        return element.dataset[Util.toDataSet(key)]
      }
    },

    setDataSet (element, key, value) {
      return (element.dataset[Util.toDataSet(key)] = value)
    }
  }

  return Util
})(jQuery)

export default Util
