import * as types from '../../actions';

const initialState = {
  all: [],
  viewed: {
    sprint: {},
    backlog: {},
  },
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
        viewed: {
          ...action.payload,
          sprint: {},
          backlog: {},
        },
      };
    case types.SAVE_PROJECT_BACKLOG:
      return {
        ...state,
        viewed: {
          ...state.viewed,
          backlog: action.payload,
        },
      };
    case types.SAVE_PROJECT_ACTIVE_SPRINT:
      return {
        ...state,
        viewed: {
          ...state.viewed,
          sprint: action.payload,
        },
      };
    case types.SAVE_SPRINTS_STORIES:
      return {
        ...state,
        viewed: {
          ...state.viewed,
          sprint: state.viewed.sprint.id === action.payload.sprintId ?
            {
              ...state.viewed.sprint,
              stories: action.payload.stories,
            } : state.viewed.sprint,
          backlog: state.viewed.backlog.id === action.payload.sprintId ?
            {
              ...state.viewed.backlog,
              stories: action.payload.stories,
            } : state.viewed.backlog,
        },
      };
    default:
      return state;
  }
}
