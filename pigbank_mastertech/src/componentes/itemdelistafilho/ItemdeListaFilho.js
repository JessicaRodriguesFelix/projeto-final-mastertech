import React, { Component } from 'react';
import './ItemDeListaFilho.css';

class ItemDeListaFilho extends Component {
  render() {
    return (
      <div onClick={() => this.props.onItemClickListener(this.props.indice)} className="ItemDeListaFilho">
        <h1>{this.props.filho.nome} </h1>
      </div>
    );
  }
}

export default ItemDeListaFilho;