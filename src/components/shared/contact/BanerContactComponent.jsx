import React, { Component } from 'react';

class BanerContactComponent extends Component {
    render() {
        return (
          <section className="banerct-container" style={{backgroundImage: 'url(./images/photo6.jpg)'}}>
        <div className="p-page-banner">
          <div className="p-banner">
            <div className="slider-text text-center">
              <h2 className="heading-2">Contact</h2>
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default BanerContactComponent;