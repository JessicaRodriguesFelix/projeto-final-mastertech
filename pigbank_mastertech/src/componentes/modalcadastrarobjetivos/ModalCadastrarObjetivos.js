import React, { Component } from 'react';
import './ModalCadastrarObjetivos.css';
import Modal from '../modal/Modal'
import InputComLabel from '../inputcomlabel/InputComLabel';
import BotaoBranco from '../botaobranco/BotaoBranco.';
import BotaoRoxo from '../botaoroxo/BotaoRoxo';
import InputComData from '../inputcomdata/InputComData';



class ModalCadastrarObjetivos extends Component {

  salvarObjetivo(){
    const item = document.getElementById("item").value
    this.props.onSaveListener({
      item
    })
    }

  render() {
    return this.props.deveAparece ? (
      <Modal>
        <div className='modal'>
          <div className='modalLayout'>

            <h1 className="criarObjetivoTitulo"> Novo Objetivo </h1>
            <p className="criarObjetivoFrase">Vamos criar o  objetivo ?
                Vamos começar preenchendo as informações abaixo:</p>

            <InputComLabel label="Objetivo *" inputId="item" />
            <InputComLabel label="Valor Do Objetivo *" />
            <InputComData label="Data Final Para Atingir o Objetivo*"  />

            <div className='botoes'>
              <BotaoBranco conteudo="Cancelar" onClickListener={this.props.onCloseListener} />

              <BotaoRoxo conteudo="Salvar" onClickListener={this.salvarObjetivo.bind(this)} />
            </div>


          </div>
        </div>
      </Modal>
    ) : null
  }
}

export default ModalCadastrarObjetivos;
