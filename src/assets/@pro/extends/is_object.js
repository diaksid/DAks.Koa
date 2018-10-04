function PROisObject (obj) {
  return typeof obj === 'object' &&
    (!obj.constructor || obj.constructor === Object) &&
    Object.prototype.toString.call(obj) === '[object Object]'
}

export default PROisObject
