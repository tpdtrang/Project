import React, { Component } from 'react';

class ContactComponent extends Component {
  render() {
    return (
      <section className="contact-container">
        <div className="container">
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
            <textarea name id cols={72} rows="8px" style={{ width: '60%' }} defaultValue={""} />
            <br />
            <button type="button" className="btn btn-primary">Save Message</button>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactComponent;