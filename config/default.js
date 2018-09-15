const fs = require('fs')
const path = require('path')

const dotenv = require('dotenv').config

dotenv()
if (process.env.NODE_ENV !== 'development') {
  dotenv({ path: `.env.${process.env.NODE_ENV}` })
}

process.env.DEBUG = process.env.NODE_ENV === 'production' ? false : process.env.DEBUG

if (/^win/i.test(process.platform)) {
  process.env.HOST = 'localhost'
  process.env.PORT = 3000
}

const config = {
  server: {
    protocol: process.env.HTTPS ? 'https' : 'http',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
  },
  dir: {
    src: 'src',
    assets: 'assets',
    static: 'static',
    build: 'build',
    public: 'public'
  },
  path: {
    app: fs.realpathSync(process.cwd())
  },

  mailer: {
    to: 'mail@daks.pro',
    service: 'Yandex',
    user: 'default@daks.pro',
    password: '+1234567'
  },

  recaptcha: {
    key: '6Lem2jEUAAAAAKIV5DAJQQ-tli3FvCb8pga36Hfx',
    secret: '6Lem2jEUAAAAAHsJpBJlN5YZNWDsH5jflJV6EAJw'
  }
}

Object.assign(config.path, {
  src: path.resolve(config.path.app, config.dir.src),
  assets: path.resolve(config.path.app, config.dir.src, config.dir.assets),
  static: path.resolve(config.path.app, config.dir.static),
  build: path.resolve(config.path.app, config.dir.build),
  public: path.resolve(config.path.app, config.dir.build, config.dir.public)
})

module.exports = config
