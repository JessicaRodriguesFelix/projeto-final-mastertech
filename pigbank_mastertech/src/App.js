import React, { Component } from 'react';
import './App.css';
import SelecionadorDeOpcoes from './componentes/selecionadordeopcoes/SelecionadorDeOpcoes'
import Footer from './componentes/footer/Footer'
import MaeListaFilhos from './componentes/maelistafilhos/MaeListaFilhos';
import Container from './componentes/container/Container'
import Header from './componentes/header/header';
import Sobre from './componentes/sobre/sobre';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sobre/>
        
      </div>
    );
  }
}

export default App;
