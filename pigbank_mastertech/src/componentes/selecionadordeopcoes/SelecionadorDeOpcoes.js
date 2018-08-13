import React, { Component } from 'react';
import './SelecionadorDeOpcoes.css';

class SelecionadorDeOpcoes extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="App">

        <button onClick={() => this.nextPath('/lista-filhos')} class="botaoOpcao">MAE</button>
        <button class="botaoOpcao">FILHO</button>
      </div>
    );
  }
}


export default SelecionadorDeOpcoes;