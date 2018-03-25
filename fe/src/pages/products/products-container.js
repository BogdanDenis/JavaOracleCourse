import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Products } from './products';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {

};

export const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
