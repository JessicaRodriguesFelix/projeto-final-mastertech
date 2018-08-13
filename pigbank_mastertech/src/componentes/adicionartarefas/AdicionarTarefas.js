import React, { Component } from 'react';
import './AdicionarTarefas.css'; 

class AdicionarTarefas extends Component {
  render() {
    return (
      <div>
        <button className="botaoAdicionarTarefa">
          <span> + </span> adicionar tarefa 
        </button>        
      </div>
    );
  }
}

export default AdicionarTarefas;