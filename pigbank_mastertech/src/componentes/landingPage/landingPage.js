import React, { Component } from 'react';
import '../landingPage/landingPage.css';
import Header from '../header/header';
import Sobre from '../sobre/sobre';
import ComoFunciona from '../comoFunciona/comoFunciona';

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
      </div>
    );
  }
}

export default LandingPage;