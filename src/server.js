const path = require('path')

const Koa = require('koa')
const koaBodyparser = require('koa-bodyparser')
const koaCompress = require('koa-compress')
const CSRF = require('koa-csrf')
const koaSession = require('koa-session')
const koaStatic = require('koa-static')
const koaViews = require('koa-views')

require('../config')
const config = require('config')

const error = require('./middleware/error')
const flash = require('./middleware/flash')
const router = require('./routes')
const assets = require(`../${config.dir.build}/assets`)

const app = new Koa()

app.keys = ['session_key', 'csrf_example']
app.use(koaSession(app))
app.use(koaBodyparser())
app.use(new CSRF())

app.use(koaCompress({
  filter: (contentType) => {
    return /text/i.test(contentType)
  },
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))

app.use(koaViews(path.resolve(__dirname, 'views'), {
  extension: 'pug',
  options: { assets: assets }
}))

app.use(koaStatic(config.path.public))

app
  .use(error)
  .use(flash)
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(config.server.port, config.server.host, () => {
  console.log('listening at %s:%d', config.server.host, config.server.port)
})
