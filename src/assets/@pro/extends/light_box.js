import PRO from '../pro'
import '../helpers/dataset'
import PROlightBox from '../components/lightbox'

PRO.LightBox = PROlightBox

PRO.prototype[PROlightBox.name] = function () {
  (() => new PROlightBox(this, ...arguments))()
  return this
}

PRO[PROlightBox.name] = function () {
  (() => new PROlightBox(...arguments))()
  return this
}
