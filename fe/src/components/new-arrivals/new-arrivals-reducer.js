import * as types from './actions/types';

const initialState = [];

export const newArrivalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_NEW_ARRIVALS:
            return action.payload;
        default:
            return state;
    }
};
