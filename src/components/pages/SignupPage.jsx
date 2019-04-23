import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import SignupComponent from '../shared/SignupComponent';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }
    onSignup = (data) => {
        var self = this;
        axios.request({
            method: 'POST',
            url: "http://localhost:3000/users",
            headers:
                { "Content-Type": "application/json" },
            data: {
                firstname: data.firstname,
                lastname: data.lastname,
                username: data.username,
                password: data.password
            }
        }).then(function (response) {
            if (response.data !== null) {
                self.setState({
                    status: true
                })
            }

        })
    }
    render() {
        if(this.state.status){
            return(
                <Redirect to = '/'></Redirect>
            )
        }
        return (
            <div>
                <HeaderLayout></HeaderLayout>
                <SignupComponent onSignup={this.onSignup}></SignupComponent>
                <FooterLayout></FooterLayout>

            </div>
        );
    }
}

export default SignupPage;