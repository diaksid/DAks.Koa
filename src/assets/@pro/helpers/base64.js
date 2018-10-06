import PRO from '../pro'

const PRObase64 = function (selector = '[data-base64]') {
  return PRO.to(selector).each(element => {
    if (element.dataset) {
      element.innerHTML += atob(element.dataset.base64)
    }
  })
}

export default PRObase64
