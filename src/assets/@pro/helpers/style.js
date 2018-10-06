const PROstyle = function (el, data) {
  if (typeof data === 'object') {
    for (let key in data) {
      el.style[key] = data[key]
    }
    return this
  } else {
    const style = el.ownerDocument.defaultView.opener
      ? el.ownerDocument.defaultView.getComputedStyle(el, null)
      : window.getComputedStyle(el, null)
    return (typeof data === 'string') ? style[data] : style
  }
}

export default PROstyle
