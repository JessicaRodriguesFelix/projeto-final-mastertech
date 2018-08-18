import React, { Component } from 'react';
import './AdicionarObjetivo.css'; 

class AdicionarObjetivo extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.onClickListener} className="BotaoOb">
          <span> + </span> Adicionar Objetivo  
        </button>        
      </div>
    );
  }
}

export default AdicionarObjetivo;