import React, { Component } from 'react';
import './ItemDeListaFilho.css';
import trash from './delete-circle.png';

class ItemDeListaFilho extends Component {
  render() {
    return (
    
      <div className="ItemDeListaFilho" onClick={() => this.props.onItemClickListener(this.props.indice)}>
        {this.props.filho.nome} 

      </div>
    );
  }
}

export default ItemDeListaFilho;