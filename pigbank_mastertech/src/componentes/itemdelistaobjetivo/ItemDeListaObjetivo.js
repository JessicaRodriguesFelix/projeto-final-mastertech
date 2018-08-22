import React, { Component } from 'react';
import './ItemDeListaObjetivo.css';
import trash from './delete-circle.png';

class ItemDeListaObjetivo extends Component {
  render() {
    return (
      <div className="ObjetivosaRealizar">
        <img src={trash} onClick={() => this.props.onItemClickListener(this.props.indice)} />

        <h1>{this.props.objetivo.item} </h1>
      </div>
    );
  }
}

export default ItemDeListaObjetivo;