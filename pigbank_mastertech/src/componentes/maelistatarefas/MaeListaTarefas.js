import React, { Component } from 'react';
import './MaeListaTarefas.css';
import AdicionarTarefas from '../adicionartarefas/AdicionarTarefas';
import ListaTarefas from '../listatarefas/ListaTarefas';
import ModalCadastrarObjetivos from '../modalcadastrarobjetivos/ModalCadastrarObjetivos';
import ModalCadastrarTarefas from '../modalcadastrartarefas/ModalCadastrarTarefas';


class MaeListaTarefas extends Component {
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

        <div className="ListaDeTarefasMae">

          <p> Crie tarefas simples para criar hábitos importantes para a ###### e que transmitam valores para sua família.

Tenho algumas sugestões de tarefas, mas você pode adicionar outras tarefas que não estejam na lista, veja:</p>


        </div>

        <AdicionarTarefas onClickListener={this.adicionarTarefasClickado.bind(this)} />

        <ListaTarefas />

        <ModalCadastrarTarefas deveAparece={this.state.mostrarTarefasModal}
          onCloseListener={this.fecharModal.bind(this)} />
      </div>
    );
  }
}

export default MaeListaTarefas;