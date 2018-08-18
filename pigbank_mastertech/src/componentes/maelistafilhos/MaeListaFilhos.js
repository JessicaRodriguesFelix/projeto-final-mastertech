import React, { Component } from 'react';
import './MaeListaFilhos.css'; 
import AdicionarCriancas from '../adicionarcriancas/AdicionarCriancas';
import ListaFilhos from '../listafilhos/ListaFilhos';


class MaeListaFilhos extends Component {
  render() {
    return (
      <div>

        <AdicionarCriancas/>

        <ListaFilhos/>
        
      </div>
    );
  }
}

export default MaeListaFilhos;