import React, { Component } from 'react';
import { AdminLayout, HeaderAdLayout } from '../../layouts';
import TableTourComponent from '../../shared/table/TableTourComponent';
import axios from 'axios';
class TableTourPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.requestLoadData();
  }
  onDelete = (id) => {
    var self = this;
    axios.request({
      method: "Delete",
      url: `http://localhost:3000/tours/${id}`,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      axios.request({
        method: "GET",
        url: "http://localhost:3000/tours",
        header: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        self.setState({
          data: response.data
        })
      })
    })
  }
  requestLoadData = () => {
    var self = this;
    axios.request({
      method: "GET",
      url: "http://localhost:3000/tours",
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
        <HeaderAdLayout></HeaderAdLayout>
        <AdminLayout></AdminLayout>
        <TableTourComponent data={this.state.data} onDelete={this.onDelete}></TableTourComponent>

      </div>
    );
  }
}

export default TableTourPage;