import path from 'path'
import staticMidleware from 'koa-static'
import Router from 'koa-router'

export default (app) => {
  app.use(staticMidleware(
    path.join(__dirname, '../../public/')
  ))

  const serverRender = require('@serverRender').default

  const router = new Router();
  router.get('/*', serverRender())
  app.use(router.routes()).use(router.allowedMethods())
}