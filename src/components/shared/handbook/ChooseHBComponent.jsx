import React, { Component } from 'react';
import Pagination from '../../function/Pagination';
import { Link } from 'react-router-dom';
class ChooseHBComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagOfItem: []
        }
    }
    onChangePage = (pageOfItems) => {
        this.setState({
            pagOfItem: pageOfItems
        })
    }
    render() {
        return (
            <section className="choose-container">
                <div className="container">
                    <div className="row" >
                        {this.state.pagOfItem.map(data => (
                            <div className="col-lg-4" key={data.id}>
                                <div className="p-page-choose">
                                    <div className="list-image">
                                        <img className="p-image" src={data.images} alt="true" />
                                    </div>
                                    <div className="p-page-text">
                                        <div className="list-room-title">
                                            <h4 className="heading-4">{data.title}</h4>
                                            <p className="date">{data.data}</p>
                                        </div>
                                        <hr />
                                        <div className="list-room-text">
                                            <p className="text">
                                                {data.description}</p>
                                            <Link className="link-text" to={'/handbook/'+data.id}>Xêm thêm <i className="fa fa-angle-double-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination items={this.props.data} onChangePage={this.onChangePage}></Pagination>
                </div>
            </section>
        );
    }
}

export default ChooseHBComponent;