import React, { Component } from 'react';

class NumberComponent extends Component {
  render() {
    return (
      <section className="number-container">
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <div className="b-page-number text-center">
                <ul className="b-number">
                  <li className="item-number"><a className="link-number" href="/">&lt;</a></li>
                  <li className="item-number active"><span className="sp-number">1</span></li>
                  <li className="item-number"><a className="link-number" href="/">2</a></li>
                  <li className="item-number"><a className="link-number" href="/">3</a></li>
                  <li className="item-number"><a className="link-number" href="/">4</a></li>
                  <li className="item-number"><a className="link-number" href="/">5</a></li>
                  <li className="item-number"><a className="link-number" href="/">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NumberComponent;