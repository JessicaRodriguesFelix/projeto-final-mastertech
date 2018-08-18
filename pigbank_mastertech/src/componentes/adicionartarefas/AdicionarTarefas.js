import React, { Component } from 'react';
import './AdicionarTarefas.css'; 

class AdicionarTarefas extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.onClickListener} className="botaoAdicionarTarefa">
          <span> + </span> adicionar tarefa 
        </button>        
      </div>
    );
  }
}

export default AdicionarTarefas;
