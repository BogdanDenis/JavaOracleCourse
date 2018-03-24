import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { OptionsList } from '../';

import './product.less';

class Product extends Component {
  static get propTypes() {
    return {
      thumbnailUrl: PropTypes.string.isRequired,
      largeImages: PropTypes.array,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      sizes: PropTypes.array,
      colours: PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      largeImages: [],
      sizes: [],
      colours: [],
    };
  }

  render() {
    const {
      thumbnailUrl,
      largeImages,
      name,
      description,
      sizes,
      colours,
    } = this.props;

    return (
      <section className="product-view">
        <section className="product-images">
            <img className="product-image" src={thumbnailUrl} />
            {            
              largeImages.map(image => {
                return (
                  <img className="product-image" src={image.imageUrl} />
                );
              })
            }
        </section>
        <section className="product-data">
            <h2 className="product-name">{name}</h2>
            <p className="product-price">TODO: price</p>
            <form
              className="product-form"
              onSubmit={() => {}} // TODO: submit action  
            >
                {sizes && 
                  <div className="product-sizes">
                    <label>Size</label>
                    <OptionsList
                      options={sizes}
                      onChange={(el) => {console.log(el)}}
                    />
                  </div>
                }
                {colours && 
                  <div className="product-colours">
                    <label>Colour</label>
                    <OptionsList
                      options={colours}
                      onChange={(el) => {console.log(el)}}
                    />
                  </div>
                }
                <input className="product-count" type="number" min="1" value="1" />
                <input className="product-add" type="submit" value="add to cart" />
            </form>
        </section>
        <section className="product-desc">{description}</section>
      </section>
    );
  }
}
