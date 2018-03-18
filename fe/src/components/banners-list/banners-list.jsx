import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Banner } from '../';

import './banners-list.less';

export class BannersList extends Component {
    static get propTypes() {
        return {
            banners: PropTypes.array,
        };
    }

    static get defaultProps() {
        return {
            banners: [],
        };
    }

    componentWillMount() {
        this.props.getBanners();
    }

    render() {
        return (
            <section className="banners">
            {
                this.props.banners.map((banner, index) => {
                    return (
                        <Banner
                            key={index}
                            bannerData={banner}
                        />
                    )
                })
            }
            </section>
        );
    }
}
