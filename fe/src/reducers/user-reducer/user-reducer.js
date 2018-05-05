import * as types from '../../actions/workload';
import { USER_ID } from '../../constants/TEMP';

const initialState = {
  id: USER_ID,
  workload: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_DEVELOPERS_WORKLOAD:
      return {
        ...state,
        workload: action.payload.id === state.id ?
          action.payload.workload : state.workload,
      };
    default:
      return state;
  }
};
