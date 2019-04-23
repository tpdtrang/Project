import React, { Component } from 'react';
import {  BanerComponent, IntroduceComponent, OurromComponent, PhotoComponent, ItemhbComponent } from '../shared';
import {HeaderLayout,FooterLayout} from '../layouts';

class HomePage extends Component {
    render() {
        return (
            <div>
                <HeaderLayout></HeaderLayout>
                <BanerComponent></BanerComponent>
                <IntroduceComponent></IntroduceComponent>
                <OurromComponent></OurromComponent>
                <PhotoComponent></PhotoComponent>
                <ItemhbComponent></ItemhbComponent>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}

export default HomePage;