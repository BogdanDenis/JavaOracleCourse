import React, { Component } from 'react';

import './footer.less';

export class Footer extends Component {
    render() {
        return (
            <footer>
                <section className="info">
                    <h4 className="footer-title">info</h4>
                    <nav className="footernav">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Journal</a></li>
                            <li><a href="#">Stockings and Trade</a></li>
                            <li><a href="#">Linen care</a></li>
                            <li><a href="#">Colour guide</a></li>
                            <li><a href="#">Size guide</a></li>
                        </ul>
                    </nav>
                </section>
                <section className="contact">
                    <h4 className="footer-title">let's keep in touch</h4>
                    <nav className="socialmedia">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" area-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" area-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" area-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest" area-hidden="true"></i></a></li>
                        </ul>
                    </nav>
                    <p className="footer-text">Join us and save 10% on your next order.</p>
                    <form>
                        <input className="footer-email" type="email" placeholder="enter you email address" />
                        <input className="footer-submit" type="submit" value="OK" />
                    </form>
                </section>
                <section className="shipping">
                    <h4 className="footer-title">worldwide shipping</h4>
                    <nav className="shippingnav">
                        <ul>
                            <li><a href="#">Shipping and returns</a></li>
                            <li><a href="#">Terms and conditions</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </section>
            </footer>
        );
    }
}