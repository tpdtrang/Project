import React, { Component } from 'react';

class BodyroomComponent extends Component {
  render() {
    return (
      <section className="bodyroom-container">
        <div className="container">
          <h2 className="heading-2 text-center">{this.props.data.title}</h2>
          <p className="text text1">{this.props.data.add}</p>
          <div className="slider-for">
            <div className="item">
              <img src={this.props.data.image1} alt="true" draggable="false" />
            </div>
            <div className="item">
              <img src={this.props.data.image2} alt="true" draggable="false" />
            </div>
            <div className="item">
              <img src={this.props.data.image3} alt="true" draggable="false" />
            </div>
            <div className="item">
              <img src={this.props.data.image4} alt="true" draggable="false" />
            </div>
            <div className="item">
              <img src={this.props.data.image5} alt="true" draggable="false" />
            </div>
          </div>
          <div className="slider-nav">
            <div className="item">
              <img src={this.props.data.image1} alt="true" draggable="false" />
            </div>
            <div className="item">
              <img src={this.props.data.image2} alt="true" draggable="false" />
            </div>
            <div className="item">
              <img src={this.props.data.image3} alt="true" draggable="false" />
            </div>
            <div className="item">
              <img src={this.props.data.image4} alt="true" draggable="false" />
            </div>
            <div className="item">
              <img src={this.props.data.image5} alt="true" draggable="false" />
            </div>
          </div>
          <p className="text text2">{this.props.data.text1}</p>
          <p className="text text3">{this.props.data.text2}</p>
          <p className="text text4">{this.props.data.text3}</p>
          <p className="text text5">{this.props.data.text4}</p>
          <p className="text text6">{this.props.data.text5}</p>
          <p className="text text7">{this.props.data.text6}</p>
          <p className="text text8">{this.props.data.text7}</p>
          <p className="text text9">{this.props.data.text8}</p>
          <p className="text text10">{this.props.data.text9}</p>
        </div>
      </section>
    );
  }
}

export default BodyroomComponent;