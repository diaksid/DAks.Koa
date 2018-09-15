const config = require('dotenv').config

config()

if (process.env.NODE_ENV !== 'development') {
  config({ path: `.env.${process.env.NODE_ENV}` })
}

if (/^win/i.test(process.platform)) {
  process.env.HOST = 'localhost'
  process.env.PORT = 3000
}
