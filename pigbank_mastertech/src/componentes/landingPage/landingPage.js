import React, { Component } from 'react';
import '../landingPage/landingPage.css';
import Header from '../header/header';
import Sobre from '../sobre/sobre';
import Contato from '../contato/contato';

class LandingPage extends Component {

  openContainer(){
    this.props.history.push('/conteudo');
  }

  render() {
    return (
      <div>
        <Header/>
        <Sobre/>
        <Contato/>
      </div>
    );
  }
}

export default LandingPage;