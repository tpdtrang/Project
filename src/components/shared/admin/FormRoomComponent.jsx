import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FormRoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            add: '',
            description: '',
            image:" ",
            price: '',

        }
    }
    onChanger = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        if(this.props.edit){
            this.props.onUpdate(this.state);    
        }else{
            this.props.onAdd(this.state);
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.dataEdit !== this.props.dataEdit && this.props.dataEdit !== {}){
            this.setState({
                id: this.props.dataEdit.id,
                title:this.props.dataEdit.title,
                add:this.props.dataEdit.add,
                description:this.props.dataEdit.description,
                image:this.props.dataEdit.image,
                price:this.props.dataEdit.price
            })
        }
    }
    render() {
        return (
            <section className="wrap-formroom">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="heading-3"> Form Rooms</h3>
                        <ol className="breadcrumb">
                            <li className="item-title"><i className="fa fa-home" /><Link to="/admin">Home</Link></li>
                            <li className="item-title"><i className="icon_document_alt" />Forms</li>
                            <li className="item-title"><i className="fa fa-file-text-o" />Form Rooms</li>
                        </ol>
                    </div>
                </div>
                <form className="navbar-form pull-right" onSubmit={this.onSubmit}>
                    <label >Title:</label>
                    <br />
                    <input type="text" style={{ width: '60%' }} name="title" onChange={this.onChanger} value={this.state.title} />
                    <br />
                    <label >Add:</label>
                    <br />
                    <input type="text" style={{ width: '60%' }} name="add" onChange={this.onChanger} value={this.state.add} />
                    <br />
                    <label >Description:</label>
                    <br />
                    <input type="text" style={{ width: '60%' }} name="description" onChange={this.onChanger} value={this.state.description} />
                    <br />
                    <label >Images:</label>
                    <br />
                    <input type="text" style={{ width: '60%' }} name="image" onChange={this.onChanger} value={this.state.image} />
                    <br />
                    <label >Price:</label>
                    <br />
                    <input type="text" style={{ width: '60%' }} name="price" onChange={this.onChanger} value={this.state.price} />
                    <br />
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </section>
        );
    }
}

export default FormRoomComponent;