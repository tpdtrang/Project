import React, { Component } from 'react';
import {HeaderLayout, FooterLayout} from '../layouts';
import {BanernewComponent,ChoosenewComponent } from '../shared';
import axios from 'axios';

class NewPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        var self =this;
        axios.request({
            method:"GET",
            url:"http://localhost:3000/news",
            headers:{
                "Content-Type":"application/json"
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
                <HeaderLayout></HeaderLayout>
                <BanernewComponent></BanernewComponent>
                <ChoosenewComponent data={this.state.data}></ChoosenewComponent>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}

export default NewPage;