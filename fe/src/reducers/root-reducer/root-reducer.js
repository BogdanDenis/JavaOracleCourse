import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  projectsReducer,
  userReducer,
} from '../';

export const RootReducer = combineReducers({
  routing: routerReducer,
  projects: projectsReducer,
  user: userReducer,
});
