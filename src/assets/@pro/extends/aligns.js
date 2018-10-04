import { Pro } from '../pro'
import '../helpers/properties'

function PROaligns (selector, context) {
  let val = 0
  return new Pro(selector, context)
    .each(function () {
      this.style.height = ''
      const height = new Pro(this).innerHeight()
      if (height > val) {
        val = height
      }
    })
    .each(function () {
      this.style.height = `${val}px`
    })
}

export default PROaligns
