import React, { Component } from 'react';
import './ItemDeListaTarefasFilho.css';
import CheckboxTarefas from '../checkboxtarefas/CheckboxTarefas';

class ItemDeListaTarefasFilho extends Component {
  render() {
    return (
      <div className="tarefasFilho">
      <div className="checkboxEstilo">
        <CheckboxTarefas CheckID={this.props.CheckID}/>
      </div>
      <div className="tarefasRealizadas">
         <h1>lavar louça </h1> 
      </div>  

      </div>
    );
  }
}

export default ItemDeListaTarefasFilho;

