import React, { Component } from 'react';

import {
    Header,
    Footer,
    BannersListContainer,
    NewArrivalsListContainer,
} from '../../components';

import './home.less';

export class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Header />
                <BannersListContainer />
                <NewArrivalsListContainer title="New Arrivals" />
                <Footer />
            </div>
        );
    }
}