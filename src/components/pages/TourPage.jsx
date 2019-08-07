import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import { BanerTourComponent, ChooseTourComponent } from '../shared';
import axios from 'axios';
class TourPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    var self = this;
    axios.request({
      method: 'GET',
      url: 'http://localhost:3000/tours',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      self.setState({
        data: response.data
      })
    })
  }
  render() {
    return (
      <div>
        <HeaderLayout></HeaderLayout>
        <BanerTourComponent></BanerTourComponent>
        <ChooseTourComponent data={this.state.data}></ChooseTourComponent>
        <FooterLayout></FooterLayout>
      </div>
    );
  }
}

export default TourPage;