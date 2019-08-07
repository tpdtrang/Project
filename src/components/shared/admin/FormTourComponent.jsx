import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormTourComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      time: '',
      transport: '',
      price: '',
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
  componentDidUpdate(prevProps) {
    if (prevProps.dataEdit !== this.props.dataEdit && this.props.dataEdit !== {}) {
      this.setState({
        id: this.props.dataEdit.id,
        title: this.props.dataEdit.title,
        time: this.props.dataEdit.time,
        transport: this.props.dataEdit.transport,
        price: this.props.dataEdit.price,
        image: this.props.dataEdit.image
      })
    }
  }
  render() {
    return (
      <section className="wrap-formcontact">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="heading-3"> Form Tours</h3>
            <ol className="breadcrumb">
              <li className="item-title"><i className="fa fa-home" /><Link to="/admin">Home</Link></li>
              <li className="item-title"><i className="icon_document_alt" />Forms</li>
              <li className="item-title"><i className="fa fa-file-text-o" />Form Tours</li>
            </ol>
          </div>
        </div>

        <form className="navbar-form pull-right" onSubmit={this.onSubmit}>
          <label >Title:</label>
          <br />
          <input type="text" style={{ width: '60%' }} name="title" onChange={this.onChanger} value={this.state.title} />
          <br />
          <label >Time:</label>
          <br />
          <input type="text" style={{ width: '60%' }} name="time" onChange={this.onChanger} value={this.state.time} />
          <br />
          <label >Transport:</label>
          <br />
          <input type="text" style={{ width: '60%' }} name="transport" onChange={this.onChanger} value={this.state.transport} />
          <br />
          <label >Price:</label>
          <br />
          <input type="text" style={{ width: '60%' }} name="price" onChange={this.onChanger} value={this.state.price} />
          <br />
          <label >Image:</label>
          <br />
          <input type="text" style={{ width: '60%' }} name="image" onChange={this.onChanger} value={this.state.image} />
          <br />
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </section>
    );
  }
}

export default FormTourComponent;