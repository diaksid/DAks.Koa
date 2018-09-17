const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  files: [
    './icons/*.svg'
  ],
  fontName: 'iconfont',
  cssTemplate: './templates/css.hbs',
  classPrefix: 'icon-',
  baseSelector: '.icon',
  types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],
  fileName: debug ? '[fontname].[ext]' : '[fontname].[hash:7].[ext]',
  emitCodepoints: {
    fileName: debug ? '[fontname].codepoints.json' : '[fontname].codepoints.[hash:7].json',
    type: 'json'
  }
}
