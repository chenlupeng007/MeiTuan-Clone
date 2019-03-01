import { combineReducers } from 'redux';

import menu from '@components/Home/reducer'
import header from '@components/Header/reducer'

const composedReducer = combineReducers({
  menu,
  header
});

export default composedReducer;