import PRO from '../pro'
import '../extends/deactive'

const PROw3c = function (selector = '[data-w3c]') {
  return PRO.to(selector)
    .deactive()
    .onclick(() => window.open(
      `//validator.w3.org/nu/?doc=${encodeURIComponent(location.href)}&showsource=yes&showoutline=yes`,
      '_blank'
    ))
}

export default PROw3c
