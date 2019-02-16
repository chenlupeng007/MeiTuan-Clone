import React from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import Empty from '@components/Empty'
import Layout from '@components/Layout'

const routes = [
  {
    path: '/',
    component: Empty,
    key: 'Empty',
    routes: [
      {
        path: '/',
        component: Layout,
        exact: true,
        key: 'Layout',
      }
    ]
  }
]

const Routes =
  <Switch>
    {renderRoutes(routes)}
  </Switch>

export { Routes, routes }