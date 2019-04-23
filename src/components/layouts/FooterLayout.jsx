import React, { Component } from 'react';

class FooterLayout extends Component {
    render() {
        return (
            <footer className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="p-tourist">
                                <h3 className="heading-3"> SHANTI HOTEL</h3>
                                <p className="text">Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="p-link">
                                <h3 className="heading-3">USEFUL LINKS</h3>
                                <ul>
                                    <li className="item link"><a href="/" className="link">Blog</a></li>
                                    <li className="item link"><a href="/" className="link">Blog</a></li>
                                    <li className="item link"><a href="/" className="link">Blog</a></li>
                                    <li className="item link"><a href="/" className="link">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="p-link">
                                <h3 className="heading-3">USEFUL LINKS</h3>
                                <ul>
                                    <li className="item link"><a href="/" className="link">Blog</a></li>
                                    <li className="item link"><a href="/" className="link">Blog</a></li>
                                    <li className="item link"><a href="/" className="link">Blog</a></li>
                                    <li className="item link"><a href="/" className="link">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="p-question">
                                <h3 className="heading-3"> Have a Questions? </h3>
                                <ul>
                                    <li className="item-adr">
                                        <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                                    </li>
                                    <li className="item-adr">
                                        <a href="@">+2 392 3929 210 </a>
                                    </li>
                                    <li className="item-adr">
                                        <a href="@">info@yourdomain.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterLayout;