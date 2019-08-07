import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import { BanerContactComponent, ContactComponent } from '../shared';
class ContactPage extends Component {
  render() {
    return (
      <div>
        <HeaderLayout></HeaderLayout>
        <BanerContactComponent></BanerContactComponent>
        <ContactComponent></ContactComponent>
        <FooterLayout></FooterLayout>

      </div>
    );
  }
}

export default ContactPage;