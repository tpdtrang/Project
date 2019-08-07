import React, { Component } from 'react';

class BanerHBComponent extends Component {
    render() {
        return (
            <section className="banerhb-container" style={{backgroundImage: 'url(/images/slider-7.jpg)'}}>
        <div className="p-page-baner">
          <div className="p-baner">
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