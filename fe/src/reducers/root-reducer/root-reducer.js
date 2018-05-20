import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  projectsReducer,
  userReducer,
  userStoryReducer,
  developerResucer,
} from '../';

export const RootReducer = combineReducers({
  routing: routerReducer,
  projects: projectsReducer,
  user: userReducer,
  userStories: userStoryReducer,
  developers: developerResucer,
});
