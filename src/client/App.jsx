import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root'

import { Routes } from '@common/routes'
import configureStore from '@common/store'

const App = () => (
  <Provider store={configureStore(window.defaultState)}>
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  </Provider>
)

export default hot(App)
