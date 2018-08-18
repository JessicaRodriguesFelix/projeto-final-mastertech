import React, { Component } from 'react';
import './App.css';
import InternalApp from './InternalApp'
import Header from './componentes/header/header';
import { Switch, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/conteudo' component={InternalApp} />
      </Switch>
       
    );
  }
}

export default App;
