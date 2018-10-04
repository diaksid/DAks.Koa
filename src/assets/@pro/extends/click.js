import { Pro } from '../pro'

Pro.assign({
  deactive () {
    return this.onclick((event) => {
      event.preventDefault()
      event.stopPropagation()
      return false
    })
  }
}, true)
