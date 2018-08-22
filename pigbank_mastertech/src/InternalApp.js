import React, { Component } from 'react';
import Container from './componentes/container/Container'
import InternalHeader from './componentes/internalheader/InternalHeader';
import InternalFooter from './componentes/internalfooter/InternalFooter';



class InternalApp extends Component {
    render() {
        return (
            <div className="App">
                <InternalHeader/>
                <Container />
                <InternalFooter/>
            </div>
        );
    }
}

export default InternalApp;
