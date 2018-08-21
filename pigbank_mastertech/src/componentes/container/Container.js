import React, { Component } from 'react';
import './Container.css';
import SelecionadorDeOpcoes from '../selecionadordeopcoes/SelecionadorDeOpcoes'
import MaeListaFilhos from '../maelistafilhos/MaeListaFilhos'
import { Switch, Route } from 'react-router-dom'
import Abas from '../abas/Abas';


class Container extends Component {
  render() {
    return (
        <div className="corpoDoContainer">
          <div className="containerInterno">
            <Switch>
              <Route exact path='/conteudo' component={SelecionadorDeOpcoes} />
              <Route exact path='/conteudo/lista-filhos' component={MaeListaFilhos} />
              <Route       path='/conteudo/lista-filhos/:nome' component={Abas} />
            </Switch>
         </div>
        </div>
    );
  }
}

export default Container;