import React, { Component } from 'react';

class BanerTourComponent extends Component {
    render() {
        return (
            <section className="banertour-container" style={{ backgroundImage: 'url(./images/photo/banahill.jpg)' }}>
                <div className="p-page-banner">
                    <div className="p-banner">
                        <div className="p-backg">
                        </div>
                        <div className="slider-text text-center">
                            <h2 className="heading-2">TOUR</h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default BanerTourComponent;