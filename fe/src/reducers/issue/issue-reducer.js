import * as types from '../../actions/issue/types';

const initialState = {
	viewed: {},
};

export const issueReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SAVE_VIEWED_ISSUE:
			return {
				...state,
				viewed: action.payload,
			};
		default:
			return state;
	}
};
