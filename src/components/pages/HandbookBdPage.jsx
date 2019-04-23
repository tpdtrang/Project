import React, { Component } from 'react';
import { BanerHBComponent, BanerContentComponent, HbBodyComponent } from '../shared';
import { HeaderLayout, FooterLayout } from '../layouts';
import axios from 'axios';

class HandbookBdPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        var self = this;
        axios.request({
            method: "GET",
            url: `http://localhost:3000/detailsProduct?product=${this.props.match.params.id}`
        }).then(function (response) {
            self.setState({
                data: response.data[0]
            })
        })
    }
    render() {
        
        return (
            <div>
                <HeaderLayout></HeaderLayout>
                <BanerHBComponent></BanerHBComponent>
                <HbBodyComponent data={this.state.data}></HbBodyComponent>
                <BanerContentComponent></BanerContentComponent>
                <FooterLayout></FooterLayout>

            </div>
        );
    }
}

export default HandbookBdPage;