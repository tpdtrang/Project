import React, { Component } from 'react';

class BanernewComponent extends Component {
    render() {
        return (
            <section className="banerct-container" style={{ backgroundImage: 'url(./images/photo6.jpg)' }}>
                <div className="p-page-banner">
                    <div className="p-banner">
                        <div className="slider-text text-center">
                            <h2 className="heading-2">News</h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BanernewComponent;