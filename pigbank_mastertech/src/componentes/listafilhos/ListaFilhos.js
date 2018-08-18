import React, { Component } from 'react';
import './ListaFilhos.css';
import ItemDeListaFilho from '../itemdelistafilho/ItemdeListaFilho';

class ListaFilhos extends Component {
  render() {
    return (
      <div className="ListaDeFilhos">
        <ItemDeListaFilho/>
        <ItemDeListaFilho/>
        <ItemDeListaFilho/>
        <ItemDeListaFilho/>
        <ItemDeListaFilho/>
        
       
      </div>
    );
  }
}

export default ListaFilhos;