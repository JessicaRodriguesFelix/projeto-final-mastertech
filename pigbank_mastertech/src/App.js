import React, { Component } from 'react';
import './App.css';
import InternalApp from './InternalApp';
import LandingPage from './componentes/landingPage/landingPage';
import TelaCadastro from './componentes/telaCadastro/telaCadastro';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/conteudo' component={InternalApp} />
        <Route path='/cadastro' component={TelaCadastro} />
      </Switch>
    );
  }
}

export default App;
