class PROjson {
  static to (data) {
    return JSON.stringify(data)
  }

  static from (data) {
    if (typeof data === 'string' && data.match(/\[(.+)]/)) {
      return JSON.parse(data)
    }
  }
}

export default PROjson
