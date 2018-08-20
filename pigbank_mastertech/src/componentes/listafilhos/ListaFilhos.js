import React, { Component } from 'react';
import './ListaFilhos.css';
import ItemDeListaFilho from '../itemdelistafilho/ItemDeListaFilho';

class ListaFilhos extends Component {
  transformarFilhoParaItem(filho, indice) {
    return <ItemDeListaFilho key={indice} indice={indice} filho={filho} onItemClickListener={this.props.onItemClickListener} />
  }

  render() {
    return (
      <div className="ListaDeFilhos">
        {this.props.listaDeFilhos.map(this.transformarFilhoParaItem.bind(this))}
      </div>
    );
  }
}

export default ListaFilhos;