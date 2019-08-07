import React, { Component } from 'react';
import { HeaderAdLayout, AdminLayout } from '../../layouts';
import FormnewComponent from '../../shared/admin/FormnewComponent';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class FormNewPage extends Component {
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
      url: 'http://localhost:3000/news',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        title: data.title,
        description: data.description,
        date: data.date,
        image: data.image
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
      url: `http://localhost:3000/news/${data.id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'title': data.title,
        'description': data.description,
        'date': data.date,
        'image': data.image
      }
    }).then(function (response) {
      self.setState({
        status: true
      })
    })
  }
  componentDidMount() {
    if (this.props.match.params.new !== undefined) {
      this.onGetData(this.props.match.params.new)
    }
  }
  onGetData(id) {
    var self = this;
    axios.request({
      method: 'GET',
      url: `http://localhost:3000/news/${id}`,
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
        <Redirect to="/tablenew"></Redirect>
      )
    }
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <AdminLayout></AdminLayout>
        <FormnewComponent onAdd={this.onAdd} dataEdit={this.state.dataEdit} edit={this.state.edit} onUpdate={this.onUpdate}></FormnewComponent>
      </div>
    );
  }
}

export default FormNewPage;