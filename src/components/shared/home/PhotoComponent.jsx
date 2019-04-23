import React, { Component } from 'react';

class PhotoComponent extends Component {
    render() {
        return (
            <div>
                <section className="photo-slider-container">
                    <div className="container">
                        <div className="p-photo-slider">
                            <h2 className="heading-2">Photos</h2>
                            <div className="p-slider">
                                <div className="p-img">
                                    <img src="./images/photo/welcometodanang.jpg" alt="Hinh anh"/>
                                </div>
                                <div className="p-img">
                                    <img src="./images/photo/bà nà.jpg" alt="Hinh anh"/>
                                </div>
                                <div className="p-img">
                                    <img src="./images/photo/cau-thuan-phuoc.jpg" alt="Hinh anh"/>
                                </div>
                                <div className="p-img">
                                    <img src="./images/photo/cautinhyeu.jpg" alt="Hinh anh"/>
                                </div>
                                <div className="p-img">
                                    <img src="./images/photo/caurong.jpg" alt="Hinh anh"/>
                                </div>
                                <div className="p-img">
                                    <img src="./images/photo/chua-linh-ung.jpg" alt="Hinh anh"/>
                                </div>
                                <div className="p-img">
                                    <img src="./images/photo/cù lao chàm.jpg" alt="Hinh anh"/>
                                </div>
                                <div className="p-img">
                                    <img src="./images/photo/cungvanhoa.jpg" alt="Hinh anh"/>
                                </div>
                                <div className="p-img">
                                    <img src="./images/photo/kham-pha-ban-dao-son-tra-1.jpg" alt="Hinh anh"/>
                                </div>
                                <div className="p-img">
                                    <img src="./images/photo/ngu-hanh-son.jpg" alt="Hinh anh"/>
                                </div>
                                <div className="p-img">
                                    <img src="./images/photo/song han.jpg" alt="Hinh anh"/>
                                </div>
                                <div className="p-img">
                                    <img src="./images/photo/sunwheel.jpg" alt="Hinh anh"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-content">
                </section>
            </div>
        );
    }
}

export default PhotoComponent;