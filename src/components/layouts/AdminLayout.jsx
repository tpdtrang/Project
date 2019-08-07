import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class AdminLayout extends Component {
    render() {
        return (
            <section className="home-container">
                <div className="home-menu">
                    <ul className="p-menu">
                        <li className="item menu-main"><Link to="/" className="link-menu active"><i className="fas fa-home" />Dashboard</Link>
                        </li>
                        <li className="item menu-main"><Link to="/" className="link-menu"><i className="far fa-edit" />Forms<span className="p-icon" /></Link>
                            <ul className="p-drop">
                                <li className="item menu-drop"><Link to="/formhb" className="link-menu link-drop">Form
                    Handbook</Link></li>
                                <li className="item menu-drop"><Link to="/formroom" className="link-menu link-drop">Form Rooms</Link>
                                </li>
                                <li className="item menu-drop"><Link to="/formtour" className="link-menu link-drop">Form
                    Tours</Link></li>
                                <li className="item menu-drop"><Link to="./formnew" className="link-menu link-drop">Form
                    News</Link></li>
                            </ul>
                        </li>
                        <li className="item menu-main"><Link to="/" className="link-menu"><i className="fas fa-table" />Tables<span className="p-icon" /></Link >
                            <ul className="p-drop">
                                <li className="item menu-drop"><Link to="./tablehb" className="link-menu link-drop">Table Handbook</Link >
                                </li>
                                <li className="item menu-drop"><Link to="./tableroom" className="link-menu link-drop">Table Rooms</Link >
                                </li>
                                <li className="item menu-drop"><Link to="./tabletour" className="link-menu link-drop">Table Tours</Link ></li>
                    <li className="item menu-drop"><Link to="./tablenew" className="link-menu link-drop">Table News</Link ></li>
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