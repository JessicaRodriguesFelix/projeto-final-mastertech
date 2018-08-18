import React, { Component } from 'react';
import '../landingPage/landingPage.css';
import Header from '../header/header';
import Sobre from '../sobre/sobre';

class LandingPage extends Component {

  openContainer(){
    this.props.history.push('/conteudo');
  }

  render() {
    return (
      <div>
        <Header/>
        <Sobre/>
      </div>
    );
  }
}

export default LandingPage;