import webpack from 'webpack';
import koaWebpack from 'koa-webpack'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'

import config from '@webpack'

export default async (app) => {
  const multiCompilers = webpack(config);
  const middleware = await koaWebpack({
    compiler: multiCompilers,
    devMiddleware: { publicPath: '/' }
  })

  app.use(middleware)
  app.use(webpackHotServerMiddleware(multiCompilers, {
    createHandler: webpackHotServerMiddleware.createKoaHandler
  }))
}