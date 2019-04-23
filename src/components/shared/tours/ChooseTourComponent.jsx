import React, { Component } from 'react';
import Pagination from '../../function/Pagination';

class ChooseTourComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagOfItem: []
        }
    }
    onChangePage = (pageOfItem) => {
        this.setState({
            pagOfItem: pageOfItem
        })
    }
    render() {
        return (
            <section className="choosetour-container">
                <div className="container">
                    <div className="row">
                        {this.state.pagOfItem.map(data => (
                            <div className="col-lg-4" key={data.id}>
                                <div className="item-listtour">
                                    <div className="p-image">
                                        <img src={data.image} alt="true" />
                                    </div>
                                    <div className="p-text">
                                        <div className="list-tour-title">
                                            <h3 className="heading-3 ">{data.title}</h3>
                                            <p className="title-text">Thời gian:<span className="sp-tg">{data.time}</span> </p>
                                        </div>
                                        <div className="list-tour-text">
                                            <p className="p-pt">Phương tiện:<span className="sp-pt">{data.transport}</span></p>
                                        </div>
                                        <hr />
                                        <div className="list-tour-price">
                                            <h6 className="heading-6">
                                                Giá trung bình/người:{data.price} </h6>
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

export default ChooseTourComponent;