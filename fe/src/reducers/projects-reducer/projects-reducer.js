import * as types from '../../actions/project';

const initialState = {
  all: [],
  viewed: {},
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_ALL_PROJECTS:
      return {
        ...state,
        all: action.payload,
      };
    case types.SAVE_VIEWED_PROJECT:
      return {
        ...state,
        viewed: state.all.find(project => project.id === action.payload),
      };
    default:
      return state;
  }
}
