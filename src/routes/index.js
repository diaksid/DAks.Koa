const Router = require('koa-router')
const mail = require('./mail')

const router = new Router()

module.exports = router
  .get('/', async ctx => {
    await ctx.render('index', { CSRF: ctx.csrf })
  })
  .use('/mail', mail.routes(), mail.allowedMethods())
