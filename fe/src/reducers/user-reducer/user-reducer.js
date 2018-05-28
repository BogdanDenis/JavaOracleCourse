import { SAVE_DEVELOPERS_WORKLOAD } from '../../actions/workload';
import {
  SAVE_DEVELOPER_ID,
  SAVE_ADMIN_STATUS,
} from '../../actions/developer';

const initialState = {
  id: 0,
  workload: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DEVELOPER_ID:
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
    case SAVE_ADMIN_STATUS:
      return {
        ...state,
        isAdmin: action.payload,
      };
    default:
      return state;
  }
};
