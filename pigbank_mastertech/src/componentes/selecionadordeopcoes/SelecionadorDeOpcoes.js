import React, { Component } from 'react';
import './SelecionadorDeOpcoes.css';

class SelecionadorDeOpcoes extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className= "titulo">  </h1>
        </header>
        <button class="botaoOpcao">MAE</button>
        <button class="botaoOpcao">FILHO</button>
      </div>
    );
  }
}


export default SelecionadorDeOpcoes;