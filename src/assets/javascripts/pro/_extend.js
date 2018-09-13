module.exports = function (Cls) {
  Object.assign(Cls.prototype, {
    deactive: function () {
      return this.onclick((event) => {
        event.preventDefault()
        event.stopPropagation()
        return false
      })
    }
  })
}
