import React, { Component } from 'react';
class HbBodyComponent extends Component {
  render() {
    return (
      <section className="hb-container">
        <div className="container">
          <h2 className="heading-2 text-center">
            {this.props.data.title}</h2>
          <p className="text-main">{this.props.data.textmain}</p>
          <img className="p-image" src={this.props.data.image1} alt="true" />
          <span>{this.props.data.note1}</span>
          <img className="p-image" src={this.props.data.image2} alt="true" />
          <span>{this.props.data.note2}</span>
          <p className="p-text">{this.props.data.text1}</p>
          <img className="p-image" src={this.props.data.image3} alt="true" />
          <span>{this.props.data.note3}</span>
          <p className="p-text">{this.props.data.text2}</p>
          <img className="p-image" src={this.props.data.image4} alt="true" />
          <span>{this.props.data.note4}</span>
          <p className="p-text">{this.props.data.text3}</p>
          <img className="p-image" src={this.props.data.image5} alt="true" />
          <span>{this.props.data.note5}</span>
          <p className="p-text">{this.props.data.text4}</p>
          <img src={this.props.data.image6} alt="true" className="p-image" />
          <span>{this.props.data.note6}</span>
          <p className="p-text">{this.props.data.text5}</p>
          <img src={this.props.data.image7} alt="true" className="p-image" />
          <span>{this.props.data.note7}</span>
          <img src={this.props.data.image8} alt="true" className="p-image" />
          <span>{this.props.data.note8}</span>
        </div>
      </section>
    );
  }
}

export default HbBodyComponent;