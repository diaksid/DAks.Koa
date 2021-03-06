import PRO from '../pro'
import { PROinnerHeight } from '../helpers/properties'

const PROaligns = function (selector, context) {
  let val = 0
  return PRO(selector, context)
    .each(function () {
      this.style.height = ''
      const height = PROinnerHeight(this)
      if (height > val) {
        val = height
      }
    })
    .each(function () {
      this.style.height = `${val}px`
    })
}

export default PROaligns
