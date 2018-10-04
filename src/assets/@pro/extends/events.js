function PROnewEvent (name, bubble = false, cancelable = false) {
  let event
  if (typeof Event === 'function') {
    event = new Event(name, {
      bubble: bubble,
      cancelable: cancelable
    })
  } else {
    event = document.createEvent('Event')
    event.initEvent(name, bubble, cancelable)
  }
  return event
}

function PROonReady (element, callback) {
  if (typeof element === 'function') {
    callback = element
    element = document
  }
  return element.addEventListener('DOMContentLoaded', callback)
}

function PROonLoad (element, callback) {
  if (typeof element === 'function') {
    callback = element
    element = window
  }
  return element.addEventListener('load', callback)
}

function PROonResize (element, callback) {
  if (typeof element === 'function') {
    callback = element
    element = window
  }
  return element.addEventListener('resize', callback)
}

function PROonScroll (element, callback) {
  if (typeof element === 'function') {
    callback = element
    element = window
  }
  return element.addEventListener('scroll', callback)
}

export { PROnewEvent, PROonReady, PROonLoad, PROonResize, PROonScroll }
