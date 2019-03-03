import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root'

import { Routes } from '@common/routes'
import configureStore from '@common/store'

const store = configureStore(window.defaultState)

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  </Provider>
)

export default hot(App)
