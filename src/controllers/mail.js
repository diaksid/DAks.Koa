const rp = require('request-promise')
const nodemailer = require('nodemailer')
const config = require('config')
const transporter = nodemailer.createTransport(config.has('mailer.service') ? {
  service: config.get('mailer.service'),
  auth: {
    user: config.get('mailer.user'),
    pass: config.get('mailer.password')
  }
} : {
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
  args: [
    '-f',
    `no-reply@${config.get('domain')}`
  ]
})
const sender = config.has('mailer.service') ? config.get('mailer.user') : `no-reply@${config.get('domain')}`

module.exports = {
  test: async (ctx) => {
    await transporter.verify()
      .then(() => {
        ctx.status = 200
        ctx.body = {
          message: 'transporter is ready'
        }
      })
  },

  deliver: async (ctx) => {
    const body = ctx.request.body
    const mail = {
      to: config.get('mailer.to').split(/\s+/),
      from: `"${body.email}" <${sender}>`,
      sender: sender,
      replyTo: body.email,
      subject: body.subject || 'контактная форма',
      html: body.message,
      text: body.message
    }
    if (body.hasOwnProperty('recaptcha')) {
      const options = {
        method: 'POST',
        uri: 'https://www.google.com/recaptcha/api/siteverify',
        json: true,
        form: {
          secret: config.get('recaptcha.secret'),
          response: body.recaptcha
        }
      }
      await rp(options)
        .then(async body => {
          if (body.success) {
            await transporter.sendMail(mail)
              .then(mes => {
                ctx.body = {
                  status: 200,
                  message: 'Сообщение отправлено'
                }
                process.env.DEBUG && console.info(mes.envelope)
              })
          } else {
            ctx.throw(401, body['error-codes'].join('.'))
          }
        })
    } else {
      await transporter.sendMail(mail)
        .then(mes => {
          ctx.body = {
            status: 200,
            message: 'Сообщение отправлено'
          }
          process.env.DEBUG && console.info(mes.envelope)
        })
    }
  }
}
