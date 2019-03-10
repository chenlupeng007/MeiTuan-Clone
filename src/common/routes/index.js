import React from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import Empty from '@components/Empty'
import { Home } from '@components/Home'
import { ChangeCity } from '@components/ChangeCity'
import { Product } from '@components/Product'
import { Detail } from '@components/Detail'

const routes = [
  {
    path: '/',
    component: Empty,
    key: 'Empty',
    routes: [
      {
        path: '/',
        component: Home,
        loadData: Home.loadData,
        exact: true,
        key: 'Home',
      },
      {
        path: '/changeCity',
        component: ChangeCity,
        loadData: ChangeCity.loadData,
        exact: true,
        key: 'changeCity',
      },
      {
        path: '/products',
        component: Product,
        loadData: Product.loadData,
        exact: true,
        key: 'product'
      },
      {
        path: '/detail',
        component: Detail,
        loadData: Detail.loadData,
        exact: true,
        key: 'detail'
      }
    ]
  }
]

const Routes =
  <Switch>
    {renderRoutes(routes)}
  </Switch>

export { Routes, routes }