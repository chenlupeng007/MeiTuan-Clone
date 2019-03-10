import { combineReducers } from 'redux';

import home from '@components/Home/reducer'
import header from '@components/Header/reducer'
import changeCity from '@components/ChangeCity/reducer'
import product from '@components/Product/reducer'
import detail from '@components/Detail/reducer'


const composedReducer = combineReducers({
  home,
  header,
  changeCity,
  product,
  detail
});

export default composedReducer;