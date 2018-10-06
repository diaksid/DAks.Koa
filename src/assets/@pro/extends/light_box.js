import { Pro } from '../pro'
import '../helpers/dataset'
import PROlightBox from '../components/light_box'

Pro.LightBox = PROlightBox

Pro.prototype[PROlightBox.name] = function () {
  const instance = new PROlightBox(...arguments)
  return this.each(el => instance.load(el))
}

Pro[PROlightBox.name] = function () {
  new Pro(`[data-${Pro.data.toKey(PROlightBox.default.attribute)}]`)[PROlightBox.name](...arguments)
  return this
}
