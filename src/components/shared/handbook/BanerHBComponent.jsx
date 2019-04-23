import React, { Component } from 'react';

class BanerHBComponent extends Component {
    render() {
        return (
            <section className="bannerhb-container" style={{backgroundImage: 'url(/images/slider-7.jpg)'}}>
        <div className="p-page-banner">
          <div className="p-banner">
            <div className="slider-text text-center">
              <h2 className="heading-2">Handbook</h2>
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default BanerHBComponent;