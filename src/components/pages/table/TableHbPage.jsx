import React, { Component } from 'react';
import { AdminLayout, HeaderAdLayout } from '../../layouts';
import TableHbComponent from '../../shared/table/TableHbComponent';
import axios from 'axios';
class TableHbPage extends Component {
    constructor(props, context) {
        super(props, context);
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
            url: `http://localhost:3000/products/${id}`,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            axios.request({
                method: "GET",
                url: "http://localhost:3000/products",
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
            url: "http://localhost:3000/products",
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
                <TableHbComponent data={this.state.data} onDelete={this.onDelete}></TableHbComponent>

            </div>
        );
    }
}

export default TableHbPage;