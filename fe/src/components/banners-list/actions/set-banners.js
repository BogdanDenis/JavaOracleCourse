import { SET_BANNERS } from './types';

export const setBanners = banners => ({
    type: SET_BANNERS,
    payload: banners,
});
