import React, { Component } from 'react';
import { AdminLayout, HeaderAdLayout } from '../../layouts';
import FormTourComponent from '../../shared/admin/FormTourComponent';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class FormTourPage extends Component {
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
      method: 'POST',
      url: 'http://localhost:3000/tours',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'title': data.title,
        'time': data.time,
        'transport': data.transport,
        'price': data.price,
        'image': data.image
      }
    }).then(function (respnse) {
      self.setState({
        status: true
      })
    })
  }
  onUpdate = (data) => {
    var self = this;
    axios.request({
      method: 'PUT',
      url: `http://localhost:3000/tours/${data.id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'title': data.title,
        'time': data.time,
        'transport': data.transport,
        'price': data.price,
        'image': data.images
      }
    }).then(function (response) {
      self.setState({
        status: true
      })
    })
  }
  componentDidMount() {
    if (this.props.match.params.tour !== undefined) {
      this.onGetData(this.props.match.params.tour);
    }
  }

  onGetData(id) {
    var self = this;
    axios.request({
      method: 'GET',
      url: `http://localhost:3000/tours/${id}`,
      headers: {
        'Content-Type': 'application/json'
      }
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
        <Redirect to="/tabletour"></Redirect>
      )
    }
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <AdminLayout></AdminLayout>
        <FormTourComponent onAdd={this.onAdd} dataEdit={this.state.dataEdit} edit={this.state.edit} onUpdate={this.onUpdate}></FormTourComponent>


      </div>
    );
  }
}

export default FormTourPage;