module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    let status = err.statusCode || err.status || 500
    ctx.status = status
    ctx.body = {
      status: status,
      message: err.message
    }
    process.env.DEBUG && console.error(status, err.message)
  }
}
