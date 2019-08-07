import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderAdLayout extends Component {
  render() {
    return (
      <header>
        <div className="p-search">
          <i className="fas fa-search" aria-hidden="true" />
          <input type="text" name="Search" placeholder="Search" />
        </div>
        <div className="p-user-profile">
          <Link className="link-user add" to="/">+ Add</Link>
          <Link className="link-user notification" to="/">
            <i className="fas fa-bell" aria-hidden="true" />
            <span className="circle">3</span>
          </Link>
          <Link className="link-user" to="/">
            <div className="user-img">
              <i className="fas fa-caret-down" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </header>
    );
  }
}

export default HeaderAdLayout;