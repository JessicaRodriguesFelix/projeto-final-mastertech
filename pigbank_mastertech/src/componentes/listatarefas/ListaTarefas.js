import React, { Component } from 'react';
import './ListaTarefas.css';
import ItemDeListaTarefasFilho from '../itemdelistatarefasfilho/ItemDeListaTarefasFilho';

class ListaTarefas extends Component {
  render() {
    return (
      <div className="ListaDeTarefas">
        <ItemDeListaTarefasFilho/>
        <ItemDeListaTarefasFilho/>
        <ItemDeListaTarefasFilho/>
        <ItemDeListaTarefasFilho/>
        <ItemDeListaTarefasFilho/>
        
       
      </div>
    );
  }
}

export default ListaTarefas;