import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FormContactComponent extends Component {
    render() {
        return (
            <section className="wrap-formcontact">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="heading-3"> Form Contact</h3>
                        <ol className="breadcrumb">
                            <li className="item-title"><i className="fa fa-home" /><Link to="/admin">Home</Link></li>
                            <li className="item-title"><i className="icon_document_alt" />Forms</li>
                            <li className="item-title"><i className="fa fa-file-text-o" />Form Contact</li>
                        </ol>
                    </div>
                </div>
                <form className="navbar-form pull-right">
                    <label htmlFor>Your Name:</label>
                    <br />
                    <input type="text" style={{ width: '60%' }} />
                    <br />
                    <label htmlFor>Your Email:</label>
                    <br />
                    <input type="text" style={{ width: '60%' }} />
                    <br />
                    <label htmlFor>Subject:</label>
                    <br />
                    <input type="text" style={{ width: '60%' }} />
                    <br />
                    <label htmlFor>Message:</label>
                    <br />
                    <textarea name id cols={72} rows="8px" defaultValue={""} />
                    <br />
                    <button type="button" className="btn btn-primary">Save</button>
                </form>
            </section>
        );
    }
}

export default FormContactComponent;