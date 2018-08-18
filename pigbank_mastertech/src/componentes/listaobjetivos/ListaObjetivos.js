import React, { Component } from 'react';
import './ListaObjetivos.css';
import ItemDeListaObjetivo from '../itemdelistaobjetivo/ItemDeListaObjetivo';


class ListaObjetivos extends Component {
  render() {
    return (
      <div className="ListaDeObjetivos">

        <ItemDeListaObjetivo/>
        <ItemDeListaObjetivo/>
        <ItemDeListaObjetivo/>

      </div>
    );
  }
}

export default ListaObjetivos;