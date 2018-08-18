import React, { Component } from 'react';
import './MaeListaFilhos.css';
import AdicionarCriancas from '../adicionarcriancas/AdicionarCriancas';
import ListaFilhos from '../listafilhos/ListaFilhos';
import ModalCadastrarTarefas from '../modalcadastrartarefas/ModalCadastrarTarefas';
import ModalCadastrarFilho from '../modalcadastrarfilho/ModalCadastrarFilho';
import filhosSevice from '../../services/filhosService';


class MaeListaFilhos extends Component {
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

  salvarFilho(filho) {
    filhosSevice.addFilho(filho)
    this.fecharModal()
  }

  onItemClicked(index) {
    const listaDeFilhos = filhosSevice.listFilhos();
    const filho = listaDeFilhos[index]
    this.props.history.push("/conteudo/lista-filhos/" + filho.nome);
  }

  render() {
    return (
      <div>

        <AdicionarCriancas onClickListener={this.adicionarTarefasClickado.bind(this)} />

        <ListaFilhos listaDeFilhos={filhosSevice.listFilhos()} onItemClickListener={this.onItemClicked.bind(this)} />

        <ModalCadastrarFilho deveAparece={this.state.mostrarTarefasModal}
          onCloseListener={this.fecharModal.bind(this)} onSaveListener={this.salvarFilho.bind(this)} />
      </div>

    );
  }
}

export default MaeListaFilhos;