import React, { Component } from 'react';
import Pagination from '../../function/Pagination';
class ChooseRoomComponent extends Component {
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
            <section className="b-page-hotel">
                <div className="container">
                    <div className="row">
                        {this.state.pagOfItem.map(data => (
                            <div className="col-lg-4" key={data.id}>
                                <div className="b-page-room">
                                    <div className="list-image">
                                        <img className="p-image" src={data.image} alt="true" />
                                    </div>
                                    <div className="list-room">
                                        <div className="list-room-title">
                                            <h3 className="heading-3 ">{data.title}</h3>
                                            <p className="title-text">{data.add}</p>
                                        </div>
                                        <div className="list-room-text">
                                            <p className="p-text">
                                                {data.description}
                                            </p>
                                        </div>
                                        <hr></hr>
                                        <div className="list-room-price">
                                            <h6 className="heading-6">
                                                Giá trung bình/đêm: {data.price}</h6>
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

export default ChooseRoomComponent;