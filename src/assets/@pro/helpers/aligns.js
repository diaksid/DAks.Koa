import { Pro } from '../pro'
import PROaligns from '../extends/aligns'

Pro.prototype.aligns = function (selector) {
  return selector ? PROaligns(selector, this) : PROaligns(this)
}
