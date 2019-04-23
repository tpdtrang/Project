import React, { Component } from 'react';
// import Pagination from '../../function/Pagination';
import axios from 'axios';

class ChooseRoomBDComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        var self = this;
        axios({
            method: "GET",
            url: 'http://localhost:3000/roombd',
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
            <section className="choosebd-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-choose-title text-center">
                                <h2 className="heading-2">Khách Sạn Bình Dân</h2>
                            </div>
                        </div>
                        <div className="p-center">
                            {this.state.data.map(data => (
                                <div className="b-page-room" key={data.id}>
                                    <div className="list-image">
                                        <img className="p-image" src={data.image} alt=" hinh anh" />
                                    </div>
                                    <div className="list-room">
                                        <div className="list-room-title">
                                            <h3 className="heading-3 ">{data.title}</h3>
                                            <p className="title-text">{data.add}</p>
                                        </div>
                                        <div className="list-room-text">
                                            <p className="p-text">{data.description}</p>
                                        </div>
                                        <hr />
                                        <div className="list-room-price">
                                            <h6 className="heading-6">
                                                Giá trung bình/đêm: {data.price}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                       
                    </div>
                </div>
            </section>
        );
    }
}

export default ChooseRoomBDComponent;