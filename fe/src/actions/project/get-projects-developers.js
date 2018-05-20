import { RSAA } from 'redux-api-middleware';

import { getDeveloper } from '../';
import { saveProjectsDevelopers } from './save-projects-developers';
import * as types from './types';
import * as endpoints from '../../constants';

export const getProjectsDevelopers = projectKey => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.GET_PROJECTS_DEVELOPERS(projectKey),
      method: 'GET',
      types: [
        types.GET_PROJECTS_DEVELOPERS_REQUEST,
        {
          type: types.GET_PROJECTS_DEVELOPERS_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(developers => {
                developers.map(developer => {
                  dispatch(getDeveloper(developer.id));
                });
                dispatch(saveProjectsDevelopers(developers));
              });
          },
        },
        types.GET_PROJECTS_DEVELOPERS_FAIL,
      ],
    },
  });
};
