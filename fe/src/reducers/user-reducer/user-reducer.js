import { SAVE_DEVELOPERS_WORKLOAD } from '../../actions/workload';
import { SAVE_DEVELOPERS_ID } from '../../actions/developer';

const initialState = {
  id: 0,
  workload: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DEVELOPERS_ID:
      return {
        ...state,
        id: action.payload,
      };
    case SAVE_DEVELOPERS_WORKLOAD:
      return {
        ...state,
        workload: action.payload.id === state.id ?
          action.payload.workload : state.workload,
      };
    default:
      return state;
  }
};
