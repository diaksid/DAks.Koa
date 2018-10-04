import { Pro } from '../pro'

function PRObase64 (selector = '[data-base64]') {
  return Pro.to(selector).each(element => {
    if (element.dataset) {
      element.innerHTML += atob(element.dataset.base64)
    }
  })
}

export default PRObase64
