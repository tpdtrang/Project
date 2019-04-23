import React, { Component } from 'react';
import { AdminLayout, HeaderAdLayout } from '../../layouts';
import TableRoomComponent from '../../shared/table/TableRoomComponent';
import axios from 'axios';
class TableRoomPage extends Component {
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
            url: `http://localhost:3000/room/${id}`,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            axios.request({
                method: "GET",
                url: "http://localhost:3000/room",
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
            url: "http://localhost:3000/room",
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
                <TableRoomComponent data={this.state.data} onDelete={this.onDelete}></TableRoomComponent>
            </div>
        );
    }
}

export default TableRoomPage;