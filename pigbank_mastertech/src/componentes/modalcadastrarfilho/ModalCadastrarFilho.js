import React, { Component } from 'react';
import './ModalCadastrarFilho.css';
import Modal from '../modal/Modal'
import InputComLabel from '../inputcomlabel/InputComLabel';
import BotaoBranco from '../botaobranco/BotaoBranco.';
import BotaoRoxo from '../botaoroxo/BotaoRoxo';
import InputComData from '../inputcomdata/InputComData';



class ModalCadastrarFilho extends Component {

  salvarFilho() {

    const nome = document.getElementById("nome").value
    this.props.onSaveListener({
      nome
    })


  }
  render() {
    return this.props.deveAparece ? (
      <Modal>
        <div className='modal'>
          <div className='modalLayout'>


            <h1 className="cadastrarCriança"> Nova criança </h1>
            <p className="cadastrarCriançaFrase">Olá , agora vamos cadastrar sua criança? para isso vou precisar que me conte um pouquinho mais sobre ela!</p>

            <InputComLabel label="Quem você vai ensinar a conquistar sonhos pela educação financeira? *" />
            <InputComLabel label="Como você é chamado por ele? *" />
            <InputComLabel label="Nome *" inputId="nome" />
            <InputComData label="Data De Nascimento*" />

            <div className='botoes'>
              <BotaoBranco conteudo="Cancelar" onClickListener={this.props.onCloseListener} />

              <BotaoRoxo conteudo="Salvar" onClickListener={this.salvarFilho.bind(this)} />
            </div>


          </div>
        </div>
      </Modal>
    ) : null
  }
}

export default ModalCadastrarFilho;