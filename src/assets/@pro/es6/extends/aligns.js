import { Pro } from '../pro'

Pro.aligns = function (selector) {
  let val = 0
  Pro.to(selector)
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
  return this
}

Pro.prototype.aligns = function (selector) {
  if (selector) {
    this.each(function () {
      Pro.aligns(new Pro(selector, this))
    })
  } else {
    Pro.aligns(this)
  }
  return this
}
