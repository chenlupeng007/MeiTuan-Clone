import { combineReducers } from 'redux';

import home from '@components/Home/reducer'
import header from '@components/Header/reducer'

const composedReducer = combineReducers({
  home,
  header
});

export default composedReducer;