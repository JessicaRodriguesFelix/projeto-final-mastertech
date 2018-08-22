import React, { Component } from 'react';
import './ObjetivosDoFilho.css';
import AdicionarObjetivo from '../adicionarobjetivo/AdicionarObjetivo';
import ListaObjetivos from '../listaobjetivos/ListaObjetivos';
import ModalCadastrarObjetivos from '../modalcadastrarobjetivos/ModalCadastrarObjetivos';
import objetivosService from '../../services/objetivosServices';

class ObjetivosDoFilho extends Component {
  constructor(props) {
    super(props);
    this.state = { mostrarObjetivosModal: false };
  }

  adicionarObjetivoClickado() {
    this.setState({ mostrarObjetivosModal: true });
  }

  fecharModal() {
    this.setState({ mostrarObjetivosModal: false });
  }
  salvarObjetivo(objetivo) {
    objetivosService.addObjetivo(this.props.filho, objetivo)
    this.fecharModal()
  }

  deleteObjetivo(index) {
    objetivosService.deleteObjetivo(this.props.filho, index)
    this.setState({ mostrarObjetivosModal: false });
  }

  render() {
    return (
      <div>
        <div className="CadastrarObjetivosFilho">

          <p> {this.props.filho.nome} ainda não tem nenhum objetivo.
                Que tal criar um agora?</p>
        </div>

        <AdicionarObjetivo onClickListener={this.adicionarObjetivoClickado.bind(this)} />

        <ListaObjetivos listaDeObjetivos={objetivosService.listObjetivos(this.props.filho)}
          onItemClickListener={this.deleteObjetivo.bind(this)} />

        <ModalCadastrarObjetivos deveAparece={this.state.mostrarObjetivosModal}
          onCloseListener={this.fecharModal.bind(this)} onSaveListener={this.salvarObjetivo.bind(this)} />
      </div>

    );
  }
}

export default ObjetivosDoFilho;