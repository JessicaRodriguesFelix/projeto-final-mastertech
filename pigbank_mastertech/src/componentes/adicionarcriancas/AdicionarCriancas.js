import React, { Component } from 'react';
import './AdicionarCriancas.css'; 

class AdicionarCriancas extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClickListener} className="botaoAdicionarCrianca">
          <span> + </span> adicionar criança 
        </button>        
      </div>
      
    );
  }
}

export default AdicionarCriancas;