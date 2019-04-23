import React, { Component } from 'react';
import {BanerHBComponent, ChooseHBComponent,BanerContentComponent} from '../shared';
import {HeaderLayout,FooterLayout} from '../layouts';
import axios from 'axios';
class HandbookPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        var self = this;
        axios({
            method: "GET",
            url: 'http://localhost:3000/products',
            headers: {
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
            <HeaderLayout></HeaderLayout>
            <BanerHBComponent></BanerHBComponent>
            <ChooseHBComponent data={this.state.data}></ChooseHBComponent>
            <BanerContentComponent></BanerContentComponent>
            <FooterLayout></FooterLayout>
                
            </div>
        );
    }
}

export default HandbookPage;