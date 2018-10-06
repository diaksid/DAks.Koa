import PRO from '../pro'
import PROaligns from '../components/aligns'

PRO.aligns = function () {
  PROaligns(...arguments)
  return this
}

PRO.prototype.aligns = function (selector) {
  if (selector) {
    this.each(function () {
      PROaligns(selector, this)
    })
  } else {
    PROaligns(this)
  }
  return this
}
