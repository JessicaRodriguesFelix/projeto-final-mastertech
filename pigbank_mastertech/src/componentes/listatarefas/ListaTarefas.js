import React, { Component } from 'react';
import './ListaTarefas.css';
import ItemDeListaTarefasFilho from '../itemdelistatarefasfilho/ItemDeListaTarefasFilho';

class ListaTarefas extends Component {
  transformarTarefasParaItens(tarefa, indice) {
    return <ItemDeListaTarefasFilho key={indice} indice={indice} tarefa={tarefa} onItemClickListener={this.props.onItemClickListener} />
  }

  render() {
    return (
      <div className="ListaDeTarefas">
        {this.props.listaDeTarefas.map(this.transformarTarefasParaItens.bind(this))}
      </div>
    );
  }
}

export default ListaTarefas;