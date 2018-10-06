import { Pro } from '../pro'
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

Pro.assign({
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
  Pro.prototype[method] = function (param) {
    return this.length && Pro[method](this.first, param)
  }
}
