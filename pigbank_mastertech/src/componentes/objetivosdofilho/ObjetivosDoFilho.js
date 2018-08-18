import React, { Component } from 'react';
import './ObjetivosDoFilho.css';
import AdicionarObjetivo from '../adicionarobjetivo/AdicionarObjetivo';
import ListaObjetivos from '../listaobjetivos/ListaObjetivos';
import ModalCadastrarObjetivos from '../modalcadastrarobjetivos/ModalCadastrarObjetivos';


class ObjetivosDoFilho extends Component {
  constructor(props) {
    super(props);
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
         <div className="CadastrarObjetivosFilho">

            <p> {this.props.filho.nome} ainda não tem nenhum objetivo.
                Que tal criar um agora?</p>
           </div>

        <AdicionarObjetivo onClickListener={this.adicionarTarefasClickado.bind(this)} />

        <ListaObjetivos />

        <ModalCadastrarObjetivos deveAparece={this.state.mostrarTarefasModal}
                onCloseListener={this.fecharModal.bind(this)} />
      </div>

    );
  }
}

export default ObjetivosDoFilho;