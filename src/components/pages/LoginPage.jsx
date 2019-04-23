import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import LoginComponent from '../shared/LoginComponent';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            isLogin: false
        }
    }
    onLogin = (data) => {
        var self = this;
        axios.request({
            method: 'GET',
            url: `http://localhost:3000/users?username=${data.username}&password=${data.password}`,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            console.log(response.data[0].is_staff);

            if (response.data.length === 0) {
                alert('Đăng nhặp không thành công')
            } else {
                if (response.data[0].is_staff === true) {
                    self.setState({
                        status: true
                    })
                } else {
                    self.setState({
                        isLogin: true
                    })
                }


            }

        })

    }
    render() {

        if (this.state.status) {
            return (
                <Redirect to='/admin'></Redirect>
            )
        }
        if (this.state.isLogin) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        return (
            <div>
                <HeaderLayout></HeaderLayout>
                <LoginComponent onLogin={this.onLogin}></LoginComponent>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}

export default LoginPage;