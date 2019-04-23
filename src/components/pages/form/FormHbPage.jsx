import React, { Component } from 'react';
import { AdminLayout, HeaderAdLayout } from '../../layouts';
import FormHbComponent from '../../shared/admin/FormHbComponent';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class FormHbPage extends Component {
    constructor(props, context) {
        super(props, context);
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
            url: 'http://localhost:3000/products',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'title': data.title,
                'description': data.description,
                'data': data.date,
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
            url: `http://localhost:3000/products/${data.id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'title': data.title,
                'description': data.description,
                'data': data.date,
            }
        }).then(function (response) {
            self.setState({
                status: true
            })
        })

    }
    componentDidMount() {
        if (this.props.match.params.hb !== undefined) {
            this.onGetData(this.props.match.params.hb);
        }
    }
    onGetData(id) {
        var self = this;
        axios.request({
            method: 'GET',
            url: `http://localhost:3000/products/${id}`,
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
                <Redirect to="/tablehb"></Redirect>
            )
        }
        return (
            <div>
                <HeaderAdLayout></HeaderAdLayout>
                <AdminLayout></AdminLayout>
                <FormHbComponent onAdd={this.onAdd} dataEdit={this.state.dataEdit} edit={this.state.edit} onUpdate={this.onUpdate}></FormHbComponent>

            </div>
        );
    }
}

export default FormHbPage;