import PRO from '../pro'
import {
  PROinnerHeight,
  PROinnerWidth,
  PROouterHeight,
  PROouterWidth,
  PROscrollTop,
  PROscrollLeft,
  PROoffset,
  PROview
} from '../helpers/properties'

PRO.assign({
  innerHeight: PROinnerHeight,
  innerWidth: PROinnerWidth,
  outerHeight: PROouterHeight,
  outerWidth: PROouterWidth,
  scrollTop: PROscrollTop,
  scrollLeft: PROscrollLeft,
  offset: PROoffset,
  view: PROview
})

for (let method of [
  'innerHeight',
  'innerWidth',
  'outerHeight',
  'outerWidth',
  'scrollTop',
  'scrollLeft',
  'offset',
  'view'
]) {
  PRO.prototype[method] = function (param) {
    return this.length && PRO[method](this.first, param)
  }
}
