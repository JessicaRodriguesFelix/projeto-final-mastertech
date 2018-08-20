import React, { Component } from 'react';
import './ItemDeListaObjetivo.css';

class ItemDeListaObjetivo extends Component {
  render() {
    return (
      <div className="ObjetivosaRealizar">
        
        <h1>{this.props.objetivo.item} </h1>  
      </div>
    );
  }
}

export default ItemDeListaObjetivo;