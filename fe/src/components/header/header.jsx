import React, { Component } from 'react';

import './header.less';

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-wrapper mobile">
                    <h1 className="banner">
                        <a href="/home">
                            <img className="logo" src="images/logo.png" alt="by molle" />
                        </a>
                    </h1>
                    <div className="hamburger"></div>
                    <nav className="mainnav">
                        <ul>
                            <li><a href="#rugs">Rugs</a></li>
                            <li><a href="#linen-currains">Linen curtains</a></li>
                            <li><a href="#linnen-bedding">Linnen bedding</a></li>
                            <li><a href="#living">Living</a></li>
                            <li><a href="#get-the-look">Get the look</a></li>
                            <li><a href="#stay">Stay</a></li>
                        </ul>
                    </nav>
                    <section className="cart">
                        <span className="quantity">0</span>
                        <span className="total">&pound;0.00</span>
                    </section>
                </div>
            </header>
        );
    }
}