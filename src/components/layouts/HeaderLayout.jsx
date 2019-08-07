import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HeaderLayoout extends Component {
  render() {
    return (
      <header className="header-container" id="p-page-header">
        <div className="container">
          <div className="row">
            <div className="p-logo">
              <Link to="/"><h1 className="heading-1">S<span className="span-1">hanti</span></h1></Link>
            </div>
            <nav className="p-menu-main">
              <ul>
                <li className="item-menu"><Link to="/" className="link-menu">trang chủ</Link></li>
                <li className="item-menu"><Link to="/rooms" className="link-menu">khách sạn</Link></li>
                <li className="item-menu"><Link to="/tours" className="link-menu">tours</Link></li>
                <li className="item-menu"><Link to="/handbook" className="link-menu">cẩm nang</Link></li>
                <li className="item-menu"><Link to="/news" className="link-menu">tin tức</Link></li>
                <li className="drop-item item-menu"><Link to="/" className="  link-menu"><i className="fas fa-bars" /></Link>
                  <ul className="p-drop">
                    <li className="drop-item "><Link className="link-menu" to="/login">Đăng Nhập</Link></li>
                    <li className="drop-item "><Link className="link-menu" to="/signup">Đăng kí</Link></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderLayoout;