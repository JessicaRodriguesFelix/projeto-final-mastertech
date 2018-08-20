import React, { Component } from 'react';
import './ItemDeListaTarefasFilho.css';
import CheckboxTarefas from '../checkboxtarefas/CheckboxTarefas';

class ItemDeListaTarefasFilho extends Component {
  render() {
    return (
      <div className="tarefasFilho">
      <div className="checkboxEstilo">
        <CheckboxTarefas CheckID={this.props.indice}/>
      </div>
      <div className="tarefasRealizadas">
         <h1>{this.props.tarefa.itens}</h1> 
      </div>  

      </div>
    );
  }
}

export default ItemDeListaTarefasFilho;

