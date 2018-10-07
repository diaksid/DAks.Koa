import PRO from '../pro'
import '../helpers/dataset'
import PROlazyLoad from '../components/lazyload'

PRO.LazyLoad = PROlazyLoad

PRO.prototype[PROlazyLoad.name] = function () {
  (() => new PROlazyLoad(this, ...arguments))()
  return this
}

PRO[PROlazyLoad.name] = function () {
  (() => new PROlazyLoad(...arguments))()
  return this
}
