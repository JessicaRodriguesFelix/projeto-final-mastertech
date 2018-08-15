import React, { Component } from 'react';
import './ModalCadastrarObjetivos.css';
import Modal from '../modal/Modal'
import InputComLabel from '../inputcomlabel/InputComLabel';
import BotaoBranco from '../botaobranco/BotaoBranco.';


class ModalCadastrarObjetivos extends Component {
  render() {
    return this.props.deveAparece ? (
      <Modal>
        <div className='modal'>
          <div className='modalLayout'>


            <h1 className="criarObjetivoTitulo"> Novo Objetivo</h1>
            <p className="criarObjetivoFrase">Vamos criar o primeiro objetivo do rafa!
                Vamos começar preenchendo as informações abaixo:</p>

              <InputComLabel label="Objetivo *"/>
              <InputComLabel label="Valor Do Objetivo *"/>
              <InputComLabel label="Data Final Para Atingir o Objetivo*"/>

              <BotaoBranco conteudo="Cancelar" onCloseListener={this.props.onCloseListener}/>


            <div>
              <button className="botaoSalvar" onClick={this.props.onCloseListener}>
                Salvar
            </button>
            </div>


          </div>
        </div>
      </Modal>
    ) : null
  }
}

export default ModalCadastrarObjetivos;
