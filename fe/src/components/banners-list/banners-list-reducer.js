import * as types from './actions/types';

const initialState = [];

export const bannersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_BANNERS:
            return action.payload;
        default:
            return state;
    }
}
