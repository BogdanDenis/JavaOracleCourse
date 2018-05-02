import * as types from '../../actions/project';

const initialState = {
  all: [],
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_ALL_PROJECTS:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
}
