import React, { Component } from 'react';
import './ListaTarefas.css';
import ItemDeListaTarefasFilho from '../itemdelistatarefasfilho/ItemDeListaTarefasFilho';

class ListaTarefas extends Component {
  render() {
    return (
      <div className="ListaDeTarefas">
        <ItemDeListaTarefasFilho CheckID={1}/>
        <ItemDeListaTarefasFilho CheckID={2}/>
        <ItemDeListaTarefasFilho CheckID={3}/>
        <ItemDeListaTarefasFilho CheckID={4}/>
        <ItemDeListaTarefasFilho CheckID={5}/>
      </div>
    );
  }
}

export default ListaTarefas;