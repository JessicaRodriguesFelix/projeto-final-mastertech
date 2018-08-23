import React, { Component } from 'react';
import './ItemDeListaTarefasFilho.css';
import CheckboxTarefas from '../checkboxtarefas/CheckboxTarefas';

class ItemDeListaTarefasFilho extends Component {
  render() {
    return (
      <div className="tarefasFilho">
      <div className="checkboxEstilo">
        <CheckboxTarefas CheckID={this.props.indice} label={this.props.tarefa.itens} />
      </div>

      
      </div>

    
    );
  }
}

export default ItemDeListaTarefasFilho;

