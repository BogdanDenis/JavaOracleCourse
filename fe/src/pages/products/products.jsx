import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { PropTypes } from 'prop-types';
import { withProps } from 'recompose';

import {
  Header,
  ProductThumbnailList,
  Footer,
} from '../../components';
import * as routes from '../../constants';

import './products.less';

export class Products extends Component {
  static get propTypes() {
    return {
      getProducts: PropTypes.func.isRequired,
      products: PropTypes.array,
      categoryTitle: PropTypes.string,
      categoryDescription: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      products: [],
      categoryTitle: '',
      categoryDescription: '',
    };
  }

  componentDidMount() {

  }

  render() {
    const {
      products,
      categoryTitle,
      categoryDescription,
    } = this.props;

    return (
      <section className="products-page">
        <Header />
        <Route
          path={`${routes.PRODUCTS_ROUTE}/:category`}
          component={withProps({
            products,
            title: categoryTitle,
            desctiption: categoryDescription,
          })(ProductThumbnailList)}
        />
        <Footer />
      </section>
    );
  }
}
