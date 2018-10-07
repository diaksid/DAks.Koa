import PRO from '../pro'
import '../extends/deactive'

const PROyandexMetrika = function (selector = '[data-yandex-metrika]') {
  return PRO.to(selector).each(element => {
    if (element.dataset && element.dataset.yandexMetrika) {
      PRO(element)
        .deactive()
        .onclick(el => window.open(
          `//metrika.yandex.ru/dashboard?id=${el.dataset.yandexMetrika}`,
          '_blank'
        ))
    }
  })
}

export default PROyandexMetrika
