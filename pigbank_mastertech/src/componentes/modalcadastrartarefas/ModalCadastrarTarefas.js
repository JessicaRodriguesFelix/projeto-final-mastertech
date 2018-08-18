import React, { Component } from 'react';
import './ModalCadastrarTarefas.css';
import Modal from '../modal/Modal'
import InputComLabel from '../inputcomlabel/InputComLabel';
import BotaoBranco from '../botaobranco/BotaoBranco.';
import BotaoRoxo from '../botaoroxo/BotaoRoxo';



class ModalCadastrarTarefas extends Component {
  render() {
    return this.props.deveAparece ? (
      <Modal>
        <div className='modal'>
          <div className='modalLayout'>


            <h1 className="criarTarefa"> Nova Tarefa </h1>
            <p className="criarTarefaFrase">Crie tarefas simples para criar hábitos importantes para o ##### e que transmitam valores para sua família.

Tenho algumas sugestões de tarefas, mas você pode adicionar outras tarefas que não estejam na lista, veja:</p>
           

            <InputComLabel label=" Adicionar Tarefa (lista com opcoes)*" />
            <InputComLabel label="  + Adicionar outra Tarefa*" />
            <InputComLabel label="Tarefa*" />
            <InputComLabel label="Periodicidade*" />

            <div className='botoes'>
              <BotaoBranco conteudo="Cancelar" onClickListener={this.props.onCloseListener} />

              <BotaoRoxo conteudo="Salvar" onClickListener={this.props.onCloseListener} />
            </div>


          </div>
        </div>
      </Modal>
    ) : null
  }
}

export default ModalCadastrarTarefas;