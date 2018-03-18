import { connect } from 'react-redux';

import { BannersList } from './banners-list';
import { getBanners, setBanners } from './actions';

const mapStateToProps = state => ({
    banners: state.thumbnails.banners,
});

const mapDispatchToProps = {
    getBanners,
    setBanners,
};

export const BannersListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BannersList);
