import React, { Component } from 'react';
import { HeaderAdLayout, AdminLayout } from '../../layouts';
import TableNewComponent from '../../shared/table/TableNewComponent';
import axios from 'axios';

class TableNewPage extends Component {
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
      method: "DELETE",
      url: `http://localhost:3000/news/${id}`,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      axios.request({
        method: "GET",
        url: "http://localhost:3000/news",
        headers: {
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
      url: "http://localhost:3000/news",
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
        <TableNewComponent data={this.state.data} onDelete={this.onDelete}></TableNewComponent>
      </div>
    );
  }
}

export default TableNewPage;