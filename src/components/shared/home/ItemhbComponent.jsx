import React, { Component } from 'react';

class ItemhbComponent extends Component {
    render() {
        return (
            <section className="choose-container">
                <div className="container">
                    <div className="p-page-text">
                        <h2 className="heading-2"> Cẩm Nang Du Lịch</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="p-page-choose">
                                <div className="list-image">
                                    <img className="p-image" src="./images/camnang/img_1.jpg" alt="Hinh anh" />
                                </div>
                                <div className="p-page-text">
                                    <div className="list-room-title">
                                        <h4 className="heading-4">Check Ngay 5 Homestay Siêu Chất Khi Du Lịch Đà Nẵng ...</h4>
                                        <p className="date">03/03/2019</p>
                                    </div>
                                    <hr />
                                    <div className="list-room-text">
                                        <p className="text">
                                            Mô-típ nhà nghỉ, khách sạn bình dân dường như
                                            đã quá quen thuộc với chúng ta, bởi tiện lợi, giá rẻ v...</p>
                                        <a className="link-text" href="./handbook">Xêm thêm <i className="fa fa-angle-double-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-page-choose">
                                <div className="list-image">
                                    <img className="p-image" src="./images/camnang/img_2.jpg" alt="Hinh anh" />
                                </div>
                                <div className="p-page-text">
                                    <div className="list-room-title">
                                        <h4 className="heading-4">Trải Nghiệm Xích Đu Phong Cách Bali Swing Ở Wild B ...</h4>
                                        <p className="date">03/03/2019</p>
                                    </div>
                                    <hr />
                                    <div className="list-room-text">
                                        <p className="text">
                                            Dạo trước, người ta cứ xôn xao về một trò chơi
                                            mạo hiểm mang tên Bali Swing ở Ubud, khiến bao kẻ...
                    </p>
                                        <a className="link-text" href="./handbook">Xêm thêm <i className="fa fa-angle-double-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-page-choose">
                                <div className="list-image">
                                    <img className="p-image" src="./images/camnang/img_3.jpg" alt="Hinh anh" />
                                </div>
                                <div className="p-page-text">
                                    <div className="list-room-title">
                                        <h4 className="heading-4">Lạc Lối Chieng Mai Phiên Bản Mini Ngay Tại Sài Gòn</h4>
                                        <p className="date">03/03/2019</p>
                                    </div>
                                    <hr />
                                    <div className="list-room-text">
                                        <p className="text">
                                            Những tưởng Sài Gòn chốn nào cũng náo nhiệt, xô bồ.
                                            Ấy thế nhưng thành phố hoa lệ đó cũng có ...
                    </p>
                                        <a className="link-text" href="./handbook">Xêm thêm <i className="fa fa-angle-double-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ItemhbComponent;