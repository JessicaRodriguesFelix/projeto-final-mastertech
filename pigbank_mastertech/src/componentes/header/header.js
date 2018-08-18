import React, { Component } from 'react';
import '../header/header.css';
import logo from '../header/Logo.png';

class Header extends Component {

  openContainer(){
    this.props.history.push('/conteudo');
  }

  render() {
    return (
      <div className='telaInicial'>
        <header>
          <img className='logo' src={logo} alt="Logo"/>
          <a href="">O que é</a>
          <a href="">Como funciona</a>
          <a href="">Quero usar</a>
          <a href="">Quem somos</a>
          <a href="">Contato</a>
        </header>

        <div className='chamada'>
          <h3>Não sabe como falar com seu filho sobre educação financeira?</h3>
          <h3> O Pigbank pode te ajudar!</h3>
        </div>

        <div className='botaoInicial'>
          <button>Como funciona</button>
          <button>Faça seu cadastro</button>
        </div>
      </div>
    );
  }
}

export default Header;