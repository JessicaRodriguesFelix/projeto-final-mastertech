import React, { Component } from 'react';
import './Container.css';
import SelecionadorDeOpcoes from '../selecionadordeopcoes/SelecionadorDeOpcoes'
import MaeListaFilhos from '../maelistafilhos/MaeListaFilhos'
import { Switch, Route } from 'react-router-dom'


class Container extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/conteudo' component={SelecionadorDeOpcoes} />
        <Route path='/conteudo/lista-filhos' component={MaeListaFilhos} />
      </Switch>
    );
  }
}

export default Container;