import React, { Component } from 'react';
import '../landingPage/landingPage.css';
import Header from '../header/header';
import Sobre from '../sobre/sobre';
import Contato from '../contato/contato';
import ComoFunciona from '../comoFunciona/comoFunciona';
import QuemSomos from '../quemsomos/QuemSomos';

class LandingPage extends Component {

  openContainer(){
    this.props.history.push('/conteudo');
  }

  render() {
    return (
      <div>
        <Header/>
        <Sobre/>
        <ComoFunciona/>
        <QuemSomos/>
        <Contato/>
      </div>
    );
  }
}

export default LandingPage;