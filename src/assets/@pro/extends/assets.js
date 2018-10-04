import { PROonReady } from './events'

function pathCheck (path) {
  if (path.indexOf('//') === -1 && path[0] !== '/') {
    path = '/' + path
  }
  return path
}

function PROstylesheet (path, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = null
  }
  options = Object.assign({
    href: pathCheck(path),
    rel: 'stylesheet'
  }, options)
  const el = document.createElement('link')
  for (let key in options) {
    el.setAttribute(key, options[key])
  }
  if (typeof callback === 'function') {
    el.addEventListener('load', callback)
  }

  function fn () {
    document.head.appendChild(el)
  }

  if (window.opera === '[object Opera]') {
    PROonReady(fn)
  } else {
    fn()
  }
}

function PROscript (path, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = null
  }
  options = Object.assign({
    src: pathCheck(path),
    async: true
  }, options)
  if (options.hasOwnProperty('async') && !options.async) {
    delete options.async
  }
  const el = document.createElement('script')
  for (let key in options) {
    el.setAttribute(key, options[key])
  }
  if (typeof callback === 'function') {
    el.addEventListener('load', callback)
  }
  const parent = window.Turbolinks ? 'head' : 'body'

  function fn () {
    document[parent].appendChild(el)
  }

  if (window.opera === '[object Opera]') {
    PROonReady(fn)
  } else {
    fn()
  }
}

export { PROstylesheet, PROscript }
