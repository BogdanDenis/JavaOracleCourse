import * as types from '../../actions/developer/types';

const initialState = [];

export const developerResucer = (state = initialState, action) => {
	switch (action.type) {
		case types.SAVE_DEVELOPER:
			if (state.find(developer => developer.id === action.payload.id)) {
				return state;
			}
			return [
				...state,
				action.payload,
			];
		case types.SAVE_DEVELOPERS:
			return action.payload;
		default:
			return state;
	}
};
