import React, { Component } from 'react';
import './ItemDeListaObjetivo.css';
import trash from './delete-circle.png';

class ItemDeListaObjetivo extends Component {
  render() {
    return (
      <div className="ObjetivosaRealizar">
        <img src={trash} onClick={() => this.props.onItemClickListener(this.props.indice)} />

       <div className="lista"> {this.props.objetivo.item}</div> 
      </div>
    );
  }
}

export default ItemDeListaObjetivo;