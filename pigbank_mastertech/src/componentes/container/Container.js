import React, { Component } from 'react';
import './Container.css';
import SelecionadorDeOpcoes from '../selecionadordeopcoes/SelecionadorDeOpcoes'
import MaeListaFilhos from '../maelistafilhos/MaeListaFilhos'
import { Switch, Route } from 'react-router-dom'
// import SelecionadorDeOpcoes from '../selecionadordeopcoes/SelecionadorDeOpcoes'


class Container extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={SelecionadorDeOpcoes} />
          <Route path='/lista-filhos' component={MaeListaFilhos} />
          {/* <Route path='/schedule' component={Schedule} /> */}
        </Switch>
      </div>
    );
  }
}

export default Container;