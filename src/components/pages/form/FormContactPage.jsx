import React, { Component } from 'react';
import {AdminLayout,HeaderAdLayout} from '../../layouts';
import FormContactComponent from '../../shared/admin/FormContactComponent';

class FormContactPage extends Component {
    
    render() {
        return (
            <div>
                <HeaderAdLayout></HeaderAdLayout>
                <AdminLayout></AdminLayout>
                <FormContactComponent></FormContactComponent>

                
            </div>
        );
    }
}

export default FormContactPage;