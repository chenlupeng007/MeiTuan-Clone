import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config'

import { Routes, routes } from '@common/routes'
import configureStore from '@common/store'

const isProduction = process.env.NODE_ENV === 'production';

const getInitialState = async (path) => {
  const store = configureStore();

  const promises = []

  const matchedRoutes = matchRoutes(routes, path)

  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  await Promise.all(promises);

  return store
}

const html = async (path) => {
  const Path = isProduction ? 'app/': '';
  const link = isProduction ? `<link rel="stylesheet" href="${Path}css/main.css" />` : '';
  const linkVendor = isProduction ? `<link rel="stylesheet" href="${Path}css/vendor.css" />` : '';


  const store = await getInitialState(path)
  const context = {
    css: []
  }

  const App = () => (
    <Provider store={store}>
      <StaticRouter location={path} context={ context }>
        { Routes }
      </StaticRouter>
    </Provider>
  )

  const content = renderToString(<App />)

  const cssString = context.css.length > 0 ? context.css.join('\n') : ''

  const css = cssString.replace(/[\r\n]/g, '')

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>App Name</title>
        <style>
          ${css}
        </style>
        ${linkVendor}
        ${link}
      </head>
      <body>
        <div id="root">${content}</div>

        <script>
          window.defaultState = ${JSON.stringify(store.getState())};
        </script>
        <script src="${Path}vendor.js"></script>
        <script src="${Path}main.js"></script>
      </body>
    </html>
  `;
}

export default html