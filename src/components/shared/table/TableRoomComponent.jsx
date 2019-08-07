import React, { Component } from 'react';
import Pagination from '../../function/Pagination';
import { Redirect } from 'react-router-dom';
class TableRoomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagOfItem: [],
      id: '',
      redirect: false
    }
  }
  onChangePage = (pageOfItem) => {
    this.setState({
      pagOfItem: pageOfItem
    })
  }
  onDelete(id) {
    this.props.onDelete(id);
  }
  onUpdate(id) {
    this.setState({
      id: id,
      redirect: true
    })
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={'/formroom/' + this.state.id}></Redirect>
      )
    }
    return (
      <section className="tableroom-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="p-title">
              <h3 className="heading-3">Table Room</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-search">
              <i className="fas fa-search" aria-hidden="true" />
              <input type="text" name="Search" placeholder="Search" />
            </div>
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Add</th>
              <th>Description</th>
              <th>Image</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Dlete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pagOfItem.map(data => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.add}</td>
                <td>{data.description}.</td>
                <td>{data.image}</td>
                <td>{data.price}</td>
                <td>
                  <button type="button" className="btn btn-large btn-block btn-success" onClick={this.onUpdate.bind(this, data.id)}>Edit</button>
                </td>
                <td>
                  <button type="button" className="btn btn-info" onClick={this.onDelete.bind(this, data.id)}>Delete</button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>
        <Pagination items={this.props.data} onChangePage={this.onChangePage}></Pagination>
      </section>
    );
  }
}

export default TableRoomComponent;