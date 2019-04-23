import React, { Component } from 'react';

class GreatRoomComponent extends Component {
    render() {
        return (
            <section className="great-container">
                <div className="container">
                    <div className="p-title">
                        <h3 className="heading-3 text-center">Những khách sạn có bữa sáng tốt nhất tại đà nẵng</h3>
                    </div>
                    <div className="p-great">
                        <img className="item-img" src="./images/img_1.jpg" alt="true"  />
                        <div className="p-text" width="50%">
                            <div className="list-room-title">
                                <h3 className="heading-3">Family</h3>
                                <p className="title-text">Bãi biển Bắc Mỹ An Đà Nẵng</p>
                            </div>
                            <div className="list-room-text">
                                <p className="text">
                                    Tọa lạc tại khu vực Bãi biển Bắc Mỹ An của thành phố Đà Nẵng, Eden Hotel Danang
                                    có trung tâm thể dục và sảnh khách chung.
                </p>
                            </div>
                            <div className="list-room-price">
                                <h6 className="heading-6">
                                    Giá trung bình/đêm: VND 1.389.120</h6>
                            </div>
                        </div>
                    </div>
                    <div className="p-great">
                        <div className="p-text">
                        </div>
                        <img className="item-img" src="./images/img_2.jpg" alt="true" />
                    </div>
                    <div className="p-great">
                        <img className="item-img" src="./images/img_3.jpg" alt="true"  />
                        <div className="p-text" width="50%">
                            <h3 className="heading-3">Family</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GreatRoomComponent;