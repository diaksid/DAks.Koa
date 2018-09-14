module.exports = async (ctx, next) => {
  if (ctx.method === 'GET') {
    ctx.state.messages = ctx.state.messages || []
    if (ctx.session.messages) {
      if (Array.isArray(ctx.session.messages)) {
        ctx.state.messages.concat(ctx.session.messages)
      } else {
        ctx.state.messages.push(ctx.session.messages)
      }
      delete ctx.session.messages
    }
  }
  await next()
}
