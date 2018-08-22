import React, { Component } from 'react';
import './ItemDeListaFilho.css';
import trash from './delete-circle.png';

class ItemDeListaFilho extends Component {
  render() {
    return (
      <div className="ItemDeListaFilho">
      <img src={trash} onClick={() => this.props.onItemClickListener(this.props.indice)}/>
        <h1>{this.props.filho.nome} </h1>

      </div>
    );
  }
}

export default ItemDeListaFilho;