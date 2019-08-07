import React, { Component } from 'react';
import { HeaderAdLayout, AdminLayout } from '../layouts';

class AdminPage extends Component {
  render() {
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <AdminLayout></AdminLayout>

      </div>
    );
  }
}

export default AdminPage;