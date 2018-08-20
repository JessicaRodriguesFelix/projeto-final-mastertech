import React, { Component } from 'react';
import './ListaObjetivos.css';
import ItemDeListaObjetivo from '../itemdelistaobjetivo/ItemDeListaObjetivo';


class ListaObjetivos extends Component {

  transformarObjetivoParaItem(objetivo, indice) {
    return < ItemDeListaObjetivo  key={indice} indice={indice} objetivo={objetivo} onItemClickListener={this.props.onItemClickListener} />
  }
  render() {
    return (
      <div className="ListaDeObjetivos">
        {this.props.listaDeObjetivos.map(this.transformarObjetivoParaItem.bind(this))}
   
      </div>
    );
  }
}

export default ListaObjetivos;