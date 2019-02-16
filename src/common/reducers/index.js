import { combineReducers } from 'redux';

const todo = (state = {}, action) => {
  return state;
}

const composedReducer = combineReducers({
  todo
});

export default composedReducer;