import { Pro } from '../pro'
import PROaligns from '../components/aligns'

Pro.prototype.aligns = function (selector) {
  if (selector) {
    this.each(function () {
      PROaligns(selector, this)
    })
  } else {
    PROaligns(this)
  }
  return this
}
