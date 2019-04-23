import React, { Component } from 'react';
import Pagination from '../../function/Pagination';
class TableContactComponent extends Component {
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
            <section className="tablecontact-container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="p-title">
                            <h3 className="heading-3"> Table Contact</h3>
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
                            <th>Your Name</th>
                            <th>Your Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(data => (
                            <tr data={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.subject}</td>
                                <td>{data.message}</td>
                                <td>
                                    <button type="button" className="btn btn-large btn-block btn-success">Edit</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-info">Delete</button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                <Pagination items={this.props.data} onChangePage={this.onChangePage}></Pagination>
            </section>
        );
    }
}

export default TableContactComponent;