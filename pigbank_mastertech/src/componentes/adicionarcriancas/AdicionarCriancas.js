import React, { Component } from 'react';
import './AdicionarCriancas.css'; 

class AdicionarCriancas extends Component {
  render() {
    return (
      <div>
        <button className="botaoAdicionarCrianca">
          <span> + </span> adicionar criança 
        </button>        
      </div>
    );
  }
}

export default AdicionarCriancas;