import { Pro } from '../pro'
import '../extends/deactive'

const PROyandexMetrika = function (selector = '[data-yandex-metrika]') {
  return Pro.to(selector).each(element => {
    if (element.dataset && element.dataset.yandexMetrika) {
      new Pro(element)
        .deactive()
        .onclick(el => window.open(
          `//metrika.yandex.ru/dashboard?id=${el.dataset.yandexMetrika}`,
          '_blank'
        ))
    }
  })
}

export default PROyandexMetrika
