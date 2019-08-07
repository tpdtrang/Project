import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var dateFormat = require('dateformat');
class FormnewComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: '',
      title: '',
      description: '',
      date: '',
      image: ''
    }

  }
  onChanger = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    if (this.props.edit) {
      this.props.onUpdate(this.state);
    } else {
      this.props.onAdd(this.state);
    }

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.dataEdit !== this.props.dataEdit && this.props.dataEdit !== {}) {
      this.setState({
        id: this.props.dataEdit.id,
        title: this.props.dataEdit.title,
        description: this.props.dataEdit.description,
        date: dateFormat(this.props.dataEdit.datam, 'yyyy-mm-dd'),
        image: this.props.dataEdit.image
      })
    }
  }
  render() {
    return (
      <section className="wrap-formnews">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="heading-3"> Form News</h3>
            <ol className="breadcrumb">
              <li className="item-title"><i className="fa fa-home" /><Link to="/admin">Home</Link></li>
              <li className="item-title"><i className="icon_document_alt" />Forms</li>
              <li className="item-title"><i className="fa fa-file-text-o" />Form News</li>
            </ol>
          </div>
        </div>
        <form className="navbar-form pull-right" onSubmit={this.onSubmit}>
          <label >Title:</label>
          <br />
          <input type="text" style={{ width: '60%' }} name="title" onChange={this.onChanger} value={this.state.title} />
          <br />
          <label >Description:</label>
          <br />
          <input type="text" style={{ width: '60%' }} name="description" onChange={this.onChanger} value={this.state.description} />
          <br />
          <label >Date:</label>
          <br />
          <input type="date" style={{ width: '60%' }} name="date" onChange={this.onChanger} value={this.state.date} />
          <br />
          <label >Images:</label>
          <br />
          <input type="text" style={{ width: '60%' }} name="image" onChange={this.onChanger} value={this.state.image} />
          <br />
          <button type="submit" className="btn btn-primary">Save</button>
        </form></section>
    );
  }
}

export default FormnewComponent;