import { combineReducers } from 'redux';

import home from '@components/Home/reducer'
import header from '@components/Header/reducer'
import changeCity from '@components/ChangeCity/reducer'

const composedReducer = combineReducers({
  home,
  header,
  changeCity
});

export default composedReducer;