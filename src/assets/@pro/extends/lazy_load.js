import { Pro } from '../pro'
import '../helpers/dataset'
import PROlazyLoad from '../components/lazy_load'

Pro.LazyLoad = PROlazyLoad

Pro.prototype[PROlazyLoad.name] = function () {
  const instance = new PROlazyLoad(...arguments)
  return this.each(el => instance.load(el))
}

Pro[PROlazyLoad.name] = function () {
  new Pro(`[data-${Pro.data.toKey(PROlazyLoad.default.attribute)}]`)[PROlazyLoad.name](...arguments)
  return this
}
