import PRO from '../pro'
import '../helpers/dataset'
import PROlazyLoad from '../components/lazy_load'

PRO.LazyLoad = PROlazyLoad

PRO.prototype[PROlazyLoad.name] = function () {
  const instance = new PROlazyLoad(...arguments)
  return this.each(el => instance.load(el))
}

PRO[PROlazyLoad.name] = function () {
  PRO(`[data-${PRO.data.toKey(PROlazyLoad.default.attribute)}]`)[PROlazyLoad.name](...arguments)
  return this
}
