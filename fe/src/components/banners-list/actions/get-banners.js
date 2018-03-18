import * as endpoints from '../../../constants';

import { setBanners } from './set-banners.js';
import { GET_BANNERS } from './types';

export const getBanners = () => (dispatch) => {
    fetch(endpoints.BANNERS_ENDPOINT)
        .then(res => {
            return res.json();
        })
        .then(banners => {
            dispatch(setBanners(banners));
        })
        .catch(() => {
            // TODO: dispatch error
        });
};
