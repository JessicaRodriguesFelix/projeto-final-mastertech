import React, { Component } from 'react';
import '../landingPage/landingPage.css';
import Header from '../header/header';
import Sobre from '../sobre/sobre';
import Contato from '../contato/contato';
import ComoFunciona from '../comoFunciona/comoFunciona';
import QuemSomos from '../quemsomos/QuemSomos';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        <Sobre/>
        <ComoFunciona/>
        <QuemSomos/>
        <Contato/>
      </div>
    );
  }
}

export default LandingPage;