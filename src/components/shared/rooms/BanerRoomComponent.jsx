import React, { Component } from 'react';

class BanerRoomComponent extends Component {
  render() {
    return (
      <section className="banerroom-container" style={{ backgroundImage: 'url(./images/rooms/b-ht-6.jpg)' }}>
        <div className="p-page-baner">
          <div className="p-baner">
            <div className="p-backg">
            </div>
            <div className="slider-text text-center">
              <h2 className="heading-2">Welcome</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BanerRoomComponent;