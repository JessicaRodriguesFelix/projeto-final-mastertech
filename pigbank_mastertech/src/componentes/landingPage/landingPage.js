import React, { Component } from 'react';
import '../landingPage/landingPage.css';
import Header from '../header/header';
import Sobre from '../sobre/sobre';
import ComoFunciona from '../comoFunciona/comoFunciona';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        <Sobre/>
        <ComoFunciona/>
      </div>
    );
  }
}

export default LandingPage;