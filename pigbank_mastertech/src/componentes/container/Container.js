import React, { Component } from 'react';
import './Container.css';
import SelecionadorDeOpcoes from '../selecionadordeopcoes/SelecionadorDeOpcoes'
import MaeListaFilhos from '../maelistafilhos/MaeListaFilhos'
import { Switch, Route } from 'react-router-dom'
import MaeListaTarefas from '../maelistatarefas/MaeListaTarefas';


class Container extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/conteudo' component={SelecionadorDeOpcoes} />
        <Route exact path='/conteudo/lista-filhos' component={MaeListaFilhos} />
        <Route path='/conteudo/lista-filhos/filho' component={MaeListaTarefas} />
      </Switch>
    );
  }
}

export default Container;