import { setNewArrivals } from './set-new-arrivals';
import * as endpoints from '../../../constants';

export const getNewArrivals = () => (dispatch) => {
    fetch(endpoints.NEW_ARRIVALS_ENDPOINT)
        .then(res => {
            return res.json();
        })
        .then(newArrivals => {
            dispatch(setNewArrivals(newArrivals));
        })
        .catch(() => {
            // TODO: dispatch error
        });
}
