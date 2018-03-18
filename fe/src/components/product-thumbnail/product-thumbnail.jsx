import React, { Component } from 'react';

import './product-thumbnail.less';

export class ProductThumbnail extends Component {
    render() {
        return (
            <section className="product-thumbnail">
                <img className="product-image" src={this.props.imageUrl} />
                <div className="product-caption">
                    <p className="product-title">{this.props.title}</p>
                    <p className="product-price">{this.props.price}</p>
                </div>
            </section>
        );
    }
}