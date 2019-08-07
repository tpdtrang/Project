import React, { Component } from 'react';
import Pagination from '../../function/Pagination';
import { Link } from 'react-router-dom'
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
            {this.state.pagOfItem.map(data => (
              <div className="p-page-news" key={data.id}>
                <div className="row">
                  <div className="col-lg-4">
                    <Link to="/" className="link-image">
                      <img className="p-image" src={data.image} alt="true" />
                    </Link>
                  </div>
                  <div className="col-lg-8">
                    <div className="p-text">
                      <Link to="/" className="link-title">
                        <h3 className="heading-3">
                          {data.title}
                        </h3>
                      </Link>
                      <p className="text">{data.description}</p>
                      <span className="p-date">{data.date}</span>
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

export default ChoosenewComponent;