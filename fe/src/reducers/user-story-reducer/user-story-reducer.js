import * as types from '../../actions/user-story';

const initialState = {
  viewed: {
    issues: [],
  },
};

export const userStoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_VIEWED_STORY:
      return {
        ...state,
        viewed: action.payload,
      };
    case types.SAVE_STORIES_ISSUES:
      return {
        ...state,
        viewed: {
          ...state.viewed,
          issues: state.viewed.key === action.payload.storyKey ?
            action.payload.issues : [],
        },
      };
    default:
      return state;
  }
};
