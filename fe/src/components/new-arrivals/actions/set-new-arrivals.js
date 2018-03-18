import { SET_NEW_ARRIVALS } from './types';

export const setNewArrivals = newArrivals => ({
    type: SET_NEW_ARRIVALS,
    payload: newArrivals,
});
