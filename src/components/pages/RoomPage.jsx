import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import {
  BanerRoomComponent, ChooseRoomComponent, BanerContentRoomComponent,
  ChooseRoomBDComponent, ChooseCenterComponent
} from '../shared';
import axios from 'axios';
class RoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      roombd: [],
      roomcenter: []
    }
  }
  componentDidMount() {
    var self = this;
    axios({
      method: "GET",
      url: 'http://localhost:3000/room',
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
        <BanerRoomComponent></BanerRoomComponent>
        <ChooseRoomComponent data={this.state.data}></ChooseRoomComponent>
        <ChooseRoomBDComponent roombd={this.state.roomdb}></ChooseRoomBDComponent>
        <ChooseCenterComponent></ChooseCenterComponent>
        <BanerContentRoomComponent></BanerContentRoomComponent>
        <FooterLayout></FooterLayout>
      </div>
    );
  }
}

export default RoomPage;