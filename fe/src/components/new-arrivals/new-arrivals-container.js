import { connect } from 'react-redux';

import { ProductThumbnailList } from '../';
import { getNewArrivals } from './actions';

const mapStateToProps = state => ({
    products: state.newArrivals,
});

const mapDispatchToProps = {
    getProducts: getNewArrivals,
};

export const NewArrivalsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductThumbnailList);
