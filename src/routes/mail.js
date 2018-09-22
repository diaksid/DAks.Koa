const Router = require('koa-router')
const controller = require('../controllers/mail')

const router = new Router()

module.exports = router
  .get('/', controller.test)
  .post('/', controller.deliver)
