import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  projectsReducer,
} from '../';

export const RootReducer = combineReducers({
  routing: routerReducer,
  projects: projectsReducer,
});
