import React, { Component } from 'react';

class IntroduceComponent extends Component {
  render() {
    return (
      <section className="introduce-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="p-img-introduce">
                <img src="./images/insta-6.jpg" alt="" width="100%" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-text-introducewow fadeInDown" data-wow-delay="1s" data-wow-duration="1s">
                <div className="p-title">
                  <h2 className="heading-2 text-center"> Welcome!</h2>
                </div>
                <div className="p-text">
                  <p className="text">Cuộc đời là một hành trình kéo dài. Và trong mọi chuyến đi đều khó có thể tránh
                    khỏi những trắc trở, khó khăn.
                    Vậy làm sao để ta có thể tiếp tục cuộc chơi với sự vui vẻ và hứng khởi chứ không phải cố
                    gắng tiếp tục trong sự chán chường, bất lực.
                    Không chỉ biết thêm nhiều vùng đất mới và được thưởng thức những món ngon vật lạ, bạn còn có
                    cơ hội khám phá chính mình trên hành trình du lịch.
                    Một cách đơn giản để “refresh” bản thân chính là đi du lịch. Thật vậy, với một chút chuẩn
                    bị, việc “xách balo lên và đi” sẽ đem lại lợi ích lớn cho bạn.
                    Và một trang web du lịch luôn là lựa chọn tuyệt vời để tìm hiểu trước khi bạn bắt đầu hành
                    trình. Hãy đến với chúng tôi, FOTOUR luôn đồng hành cùng những chuyến đi của bạn.
                    Website hổ trợ nhiều mặt du lịch giúp mọi người có thể tự tin và tiết kiệm thời gian khi có
                    ý định du lịch. Với lịch trình dày, đúng thời gian cam kết, luôn sẵn sàng phục vụ
                    du khách mọi lúc, mọi nơi, đảm bảo tính chuyên nghiệp và chất lượng thông tin tốt nhất.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IntroduceComponent;