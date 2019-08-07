import React, { Component } from 'react';
import { AdminLayout, HeaderAdLayout } from '../../layouts';
import FormRoomComponent from '../../shared/admin/FormRoomComponent';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class FormRoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEdit: {},
      edit: false,
      status: false
    }
  }
  onAdd = (data) => {
    var self = this;
    axios.request({
      method: "POST",
      url: "http://localhost:3000/room",
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'title': data.title,
        'add': data.add,
        'description': data.description,
        'image': data.image,
        'price': data.price,
      }

    }).then(function (response) {
      self.setState({
        status: true
      })
    })

  }
  onUpdate = (data) => {
    var self = this;
    axios.request({
      method: 'PUT',
      url: `http://localhost:3000/room/${data.id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'title': data.title,
        'add': data.add,
        'description': data.description,
        'image': data.image,
        'price': data.price,
      }
    }).then(function (response) {
      self.setState({
        status: true
      })
    })
  }
  componentDidMount() {
    if (this.props.match.params.room !== undefined) {
      this.onGetData(this.props.match.params.room);
    }
  }
  onGetData(id) {
    var self = this;
    axios.request({
      method: 'GET',
      url: `http://localhost:3000/room/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      self.setState({
        dataEdit: response.data,
        edit: true
      })
    })
  }
  render() {
    if (this.state.status) {
      return (
        <Redirect to="/tableroom"></Redirect>
      )
    }
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <AdminLayout></AdminLayout>
        <FormRoomComponent onAdd={this.onAdd} dataEdit={this.state.dataEdit} edit={this.state.edit} onUpdate={this.onUpdate}></FormRoomComponent>
      </div>
    );
  }
}

export default FormRoomPage;