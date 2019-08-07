import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import BodyroomComponent from '../../components/shared/rooms/BodyroomComponent';
import BanerRoomComponent from '../../components/shared/rooms/BanerRoomComponent';
import axios from 'axios';

class BodyroomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    var self = this;
    axios.request({
      method: "GET",
      url: `http://localhost:3000/roomct?room=${this.props.match.params.id}`
    }).then(function (response) {
      self.setState({
        data: response.data[0]
      })
    })
  }
  render() {
    return (
      <div>
        <HeaderLayout></HeaderLayout>
        <BanerRoomComponent></BanerRoomComponent>
        <BodyroomComponent data={this.state.data}></BodyroomComponent>
        <FooterLayout></FooterLayout>
      </div>
    );
  }
}

export default BodyroomPage;