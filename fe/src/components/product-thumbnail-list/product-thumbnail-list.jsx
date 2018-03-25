import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { ProductThumbnail } from '../';

import './product-thumbnail-list.less';

export class ProductThumbnailList extends Component {
    static get propTypes() {
        return {
            products: PropTypes.array,
            title: PropTypes.string,
            description: PropTypes.string,
        };
    }

    static get defaultProps() {
        return {
            products: [],
            title: '',
            description: '',
        };
    }

    render() {
        return(
            <section className="products">
                <h2 className="products-header">{this.props.title}</h2>
                {
                    this.props.products.map((product, index) => {
                        return (
                            <ProductThumbnail
                                title={product.title}
                                price={product.price}
                                imageUrl={product.imageUrl}
                            />
                        );
                    })
                }
            </section>
        );
    }
}