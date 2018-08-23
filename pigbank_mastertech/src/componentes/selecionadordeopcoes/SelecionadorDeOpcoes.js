import React, { Component } from 'react';
import './SelecionadorDeOpcoes.css';
import BotaoRoxo from '../botaoroxo/BotaoRoxo';


class SelecionadorDeOpcoes extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="botoesPrincipal">
        <div className="botaoMae">
          <button onClick={() => this.nextPath('/conteudo/lista-filhos')} className="estiloBotaoRoxo">RESPONSAVEL</button>
        </div>
        <div className="botaoFilho">
          <button onClick={() => this.nextPath('/conteudo/resumo-filho')} className="estiloBotaoBranco">CRIANÇA</button>
        </div>
      </div>
    );
  }
}


export default SelecionadorDeOpcoes;