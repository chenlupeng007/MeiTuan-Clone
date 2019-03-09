import { combineReducers } from 'redux';

import home from '@components/Home/reducer'
import header from '@components/Header/reducer'
import changeCity from '@components/ChangeCity/reducer'
import product from '@components/Product/reducer'

const composedReducer = combineReducers({
  home,
  header,
  changeCity,
  product,
});

export default composedReducer;