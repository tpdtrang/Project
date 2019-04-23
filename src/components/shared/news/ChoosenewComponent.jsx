import React, { Component } from 'react';

class ChoosenewComponent extends Component {
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
            <section className="choosenews-container">
                <div className="container">
                    <div className="row">
                        {this.props.data.map(data => (
                            <div className="p-page-news" key={data.id}>
                                <div className="row">
                                <div className="col-lg-4">
                                    <a href="@" className="link-image">
                                        <img className="p-image" src={data.image} alt="true" />
                                    </a>
                                </div>
                                <div className="col-lg-8">
                                    <div className="p-text">
                                        <a href="@" className="link-title">
                                            <h3 className="heading-3">
                                                {data.title}
                                            </h3>
                                        </a>
                                        <p className="text">{data.decription}</p>
                                        <span className="p-date">{data.date}</span>
                                    </div>
                                </div>
                                </div>
                               
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        );
    }
}

export default ChoosenewComponent;