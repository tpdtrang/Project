import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class OurromComponent extends Component {
  render() {
    return (
      <section className="ourrom-container">
        <div className="container">
          <div className="p-title-main">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="p-title text-center">
                  <h2>Khách sạn tại đà nẵng</h2>
                </div>
              </div>
            </div>
            <div className="p-ourroom">
              <div className="row">
                <div className="col-lg-4">
                  <div className="p-page-room">
                    <Link to="./rooms">
                      <div className="list-image">
                        <img src="./images/room-1.jpg" alt="" width="100%" />
                      </div>
                      <div className="list-room">
                        <div className="list-room-title">
                          <h3 className="heading-3 ">Eden Hotel Danang</h3>
                          <p className="title-text">Bãi biển Bắc Mỹ An Đà Nẵng</p>
                        </div>
                        <div className="list-room-text">
                          <p>
                            Tọa lạc tại khu vực Bãi biển Bắc Mỹ An của thành phố Đà Nẵng, Eden Hotel Danang
                                                    có trung tâm thể dục và sảnh khách chung.</p>
                        </div>
                        <hr></hr>
                        <div className="list-room-price">
                          <h6 className="heading-6">
                            Giá trung bình/đêm: VND 400.000</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="p-page-room">
                    <Link to="./rooms">
                      <div className="list-image">
                        <img src="https://static.mytour.vn/resources/pictures/hotels/6/bqc1450242027_like-backpacker-hostel-da-nang.jpg" alt="" width="100%" />
                      </div>
                      <div className="list-room">
                        <div className="list-room-title">
                          <h3 className="heading-3 ">Like Backpacker Hostel Đà Nẵng</h3>
                          <p className="title-text">22 Nguyễn Tri Phương, Thanh Khê, Đà Nẵng</p>
                        </div>
                        <div className="list-room-text">
                          <p>
                            Hostel Đà Nẵng Like Backpacker là một khách sạn giá rẻ khá dễ thương nằm tại khu vực trung tâm Đà Nẵng. Với địa điểm thuận lợi gần sân bay Đà Nẵng và những địa điểm tham quan trong thành phố cũng như các địa điểm ăn uống. Khách sạn Đà Nẵng giá rẻ Like Backpacker là một sự lựa chọn rất phù hợp dành cho dân “phượt”</p>
                        </div>
                        <hr></hr>
                        <div className="list-room-price">
                          <h6 className="heading-6">
                            Giá trung bình/đêm: 200.000 - 600.000VND</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="p-page-room">
                    <Link to="./rooms">
                      <div className="list-image">
                        <img src="https://r.bstatic.com/images/hotel/max1024x768/969/96918163.jpg" alt="" width="100%" />
                      </div>
                      <div className="list-room">
                        <div className="list-room-title">
                          <h3 className="heading-3 ">Green Moon Beach Hostel</h3>
                          <p className="title-text">39 Hà Bổng, Sơn Trà, Đà Nẵng</p>
                        </div>
                        <div className="list-room-text">
                          <p>Tọa lạc trên con đường Hà Bổng gần bãi tắm Mỹ Khê Đà Nẵng, Green Moon Beach Hostel là một trong những khách sạn Đà Nẵng giá rẻ được nhiều du khách lựa chọn. Lưu trú tại đây, bạn dễ dàng đi tắm biển, tham quan bán đảo Sơn Trà, Ngũ Hành Sơn. Chất lượng phòng khá tốt và tương ứng với giá tiền, Green Moon Beach Hostel là khách sạn giá rẻ được nhiều du khách yêu thích</p>
                        </div>
                        <hr></hr>
                        <div className="list-room-price">
                          <h6 className="heading-6">
                            Giá trung bình/đêm:  200.000đ – 500.000 VND</h6>
                        </div>
                      </div>
                    </Link>
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

export default OurromComponent;