import React, { Component } from 'react';
import './MaeListaFilhos.css'; 
import AdicionarCriancas from '../adicionarcriancas/AdicionarCriancas';
import ListaFilhos from '../listafilhos/ListaFilhos';
import ModalCadastrarTarefas from '../modalcadastrartarefas/ModalCadastrarTarefas';
import ModalCadastrarFilho from '../modalcadastrarfilho/ModalCadastrarFilho';


      class MaeListaFilhos extends Component {
        constructor() {
          super();
          this.state = { mostrarTarefasModal: false };
        }
      
        adicionarTarefasClickado() {
          this.setState({ mostrarTarefasModal: true });
        }
      
        fecharModal() {
          this.setState({ mostrarTarefasModal: false });
        }
      
        render() {
          return (
            <div>
      
              <AdicionarCriancas onClickListener={this.adicionarTarefasClickado.bind(this)} />
      
              <ListaFilhos/>
      
              <ModalCadastrarFilho deveAparece={this.state.mostrarTarefasModal}
                onCloseListener={this.fecharModal.bind(this)} />
            </div>
           
    );
  }
}

export default MaeListaFilhos;