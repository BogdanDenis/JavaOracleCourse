import * as types from '../../actions/developer/types';

const initialState = [];

export const developerResucer = (state = initialState, action) => {
	switch (action.type) {
		case types.SAVE_DEVELOPER:
			return [
				...state,
				action.payload,
			];
		default:
			return state;
	}
};
