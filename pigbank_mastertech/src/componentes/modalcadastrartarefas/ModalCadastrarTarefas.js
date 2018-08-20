import React, { Component } from 'react';
import './ModalCadastrarTarefas.css';
import Modal from '../modal/Modal'
import InputComLabel from '../inputcomlabel/InputComLabel';
import BotaoBranco from '../botaobranco/BotaoBranco.';
import BotaoRoxo from '../botaoroxo/BotaoRoxo';
import InputComOpcoes from '../inputcomopcoes/InputComOpcoes';




class ModalCadastrarTarefas extends Component {
  salvarTarefa() {
    const tarefaPredefinidas = document.getElementById("tarefaPredefinidas").value
    const temNovaTarefa = document.getElementById("novaTarefa").value

    this.props.onSaveListener({
      itens: temNovaTarefa || tarefaPredefinidas
    })
  }
  render() {
    return this.props.deveAparece ? (
      <Modal>
        <div className='modal'>
          <div className='modalLayout'>


            <h1 className="criarTarefa"> Nova Tarefa </h1>
            <p className="criarTarefaFrase">Crie tarefas simples para criar hábitos importantes para o ##### e que transmitam valores para sua família.

Tenho algumas sugestões de tarefas, mas você pode adicionar outras tarefas que não estejam na lista, veja:</p>


            <InputComOpcoes label=" Adicionar Tarefa (lista com opcoes)*" inputId="tarefaPredefinidas" />

            <InputComLabel label=" + Adicionar outra Tarefa*" inputId="novaTarefa" />



            <div className='botoes'>
              <BotaoBranco conteudo="Cancelar" onClickListener={this.props.onCloseListener} />

              <BotaoRoxo conteudo="Salvar" onClickListener={this.salvarTarefa.bind(this)} />
            </div>


          </div>
        </div>
      </Modal>
    ) : null
  }
}

export default ModalCadastrarTarefas;