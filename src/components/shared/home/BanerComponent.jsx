import React, { Component } from 'react';

class BanerComponent extends Component {
    render() {
        return (
            <section className="banner-container" style={{ backgroundImage: 'url(./images/photo/cachep.jpg)' }}  data-paroller-factor="0.5" data-paroller-factor-xs="0.2">
                <div className="p-banner">
                    <div className="banner-text text-center">
                        <h2 className="heading-2">Welcome To Shanti</h2>
                        <h3 className="heading-3">---Hotel &amp; Tour---</h3>
                    </div>
                </div>
            </section>
        );
    }
}

export default BanerComponent;