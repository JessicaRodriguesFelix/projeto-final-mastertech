import React, { Component } from 'react';
import './App.css';
import SelecionadorDeOpcoes from './componentes/selecionadordeopcoes/SelecionadorDeOpcoes'
import Footer from './componentes/footer/Footer'
import MaeListaFilhos from './componentes/maelistafilhos/MaeListaFilhos';
import Container from './componentes/container/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>PigBank</h1>
          
        </header>

        <Container/>
        
        <Footer/>
        
        
      </div>
    );
  }
}

export default App;
