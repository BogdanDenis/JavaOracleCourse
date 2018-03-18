import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './banner.less';

export class Banner extends Component {
    static get propTypes() {
        return {
            bannerData: PropTypes.object.isRequired,
        };
    }

    render() {
        return (
            <section className="banner">
                {this.props.bannerData.overlay && 
                    <div className="banner-overlay">
                        <h2 className="banner-overlay-title">
                            {this.props.bannerData.overlay.title}
                        </h2>
                        <p className="banner-overlay-subtitle">
                            {this.props.bannerData.overlay.subtitle}
                        </p>
                    </div>
                }
                {
                    this.props.bannerData.title
                    && 
                    <h2 className="banner-title">{this.props.bannerData.title}</h2>
                }
                {
                    this.props.bannerData.text
                    &&
                    <h2 className="banner-text">{this.props.bannerData.text}</h2>
                }
                <img className="banner-image" src={this.props.bannerData.imageUrl} />
            </section>
        );
    }
}