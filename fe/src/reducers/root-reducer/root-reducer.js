import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export const RootReducer = combineReducers({
  routing: routerReducer,
});
