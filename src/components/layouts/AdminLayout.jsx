import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class AdminLayout extends Component {
    render() {
        return (
            <section className="home-container">
                {/* <div class="p-logo">
        <h1 class="heading-1">ADMIN</h1>
        </div> */}
                <div className="home-menu">
                    <ul className="p-menu">
                        <li className="item menu-main"><Link to="/admin" className="link-menu active"><i className="fas fa-home" />Dashboard</Link>
                        </li>
                        <li className="item menu-main"><Link to="/" className="link-menu"><i className="far fa-edit" />Forms<span className="p-icon" /></Link>
                            <ul className="p-drop">
                                <li className="item menu-drop"><Link to="/formhb" className="link-menu link-drop">Form
                    Handbook</Link></li>
                                <li className="item menu-drop"><Link to="/formroom" className="link-menu link-drop">Form Rooms</Link>
                                </li>
                                <li className="item menu-drop"><Link to="/formhbbd" className="link-menu link-drop">Form
                    HandbookBody</Link></li>
                                <li className="item menu-drop"><Link to="./formcontact" className="link-menu link-drop">Form
                    Contact</Link></li>
                            </ul>
                        </li>
                        <li className="item menu-main"><Link to="/" className="link-menu"><i className="fas fa-table" />Tables<span className="p-icon" /></Link >
                            <ul className="p-drop">
                                <li className="item menu-drop"><Link to="./tablehb" className="link-menu link-drop">Table Handbook</Link >
                                </li>
                                <li className="item menu-drop"><Link to="./tableroom" className="link-menu link-drop">Table Rooms</Link >
                                </li>
                                <li className="item menu-drop"><Link to="./tablecontact" className="link-menu link-drop">Table
                    Contact</Link ></li>
                            </ul>
                        </li>
                        <li className="item menu-main"><Link to="/" className="link-menu"><i className="fab fa-react" />Pages<span className="p-icon" /></Link >
                            <ul className="p-drop">
                                <li className="item menu-drop"><Link to="./login.html" className="link-menu link-drop">Login</Link ></li>
                                <li className="item menu-drop"><Link to="/" className="link-menu link-drop">Contact</Link ></li>
                                <li className="item menu-drop"><Link to="/" className="link-menu link-drop">Error</Link ></li>
                            </ul>
                        </li>
                        <li className="item menu-main"><Link to="/" className="link-menu"><i className="far fa-user" />User<span className="p-icon" /></Link >
                            <ul className="p-drop">
                                <li className="item menu-drop"><Link to="./login.html" className="link-menu link-drop">Admin</Link ></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default AdminLayout;