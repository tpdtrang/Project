import React, { Component } from 'react';
import {AdminLayout,HeaderAdLayout} from '../../layouts';
import TableContactComponent from '../../shared/table/TableContactComponent';
import axios from 'axios';
class TableContactPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }
    componentDidMount(){
        var self = this;
       axios.request({
           method:"GET",
           url:"http://localhost:3000/contact",
           header:{
            "Content-Type": "application/json"
           }
       }).then(function(response){
        self.setState({
            data:response.data
        })
       })
    }
    render() {
        return (
            <div>
                <HeaderAdLayout></HeaderAdLayout>
                <AdminLayout></AdminLayout>
                <TableContactComponent data={this.state.data}></TableContactComponent>
                
            </div>
        );
    }
}

export default TableContactPage;