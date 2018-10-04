import { Pro } from '../pro'

function PROw3c (selector = '[data-w3c]') {
  return Pro.to(selector).onclick(() => window.open(
    `//validator.w3.org/nu/?doc=${encodeURIComponent(location.href)}&showsource=yes&showoutline=yes`,
    '_blank'
  ))
}

export default PROw3c
