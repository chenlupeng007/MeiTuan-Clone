import html from './html'

const serverRender = () => {
  return async (ctx, next) => {
    const path = ctx.request.path.split('.');

    if(path.length > 1) {
      await next()
    }
    else {
      const htmlTemplate =   await html(ctx.path, ctx.request.search);
      ctx.body = htmlTemplate;
    }
  }
}

export default serverRender;
