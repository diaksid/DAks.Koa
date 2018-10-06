import PRO from '../pro'
import '../helpers/dataset'
import PROlightBox from '../components/light_box'

PRO.LightBox = PROlightBox

PRO.prototype[PROlightBox.name] = function () {
  const instance = new PROlightBox(...arguments)
  return this.each(el => instance.load(el))
}

PRO[PROlightBox.name] = function () {
  PRO(`[data-${PRO.data.toKey(PROlightBox.default.attribute)}]`)[PROlightBox.name](...arguments)
  return this
}
