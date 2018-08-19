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
        <header className='headerMenu'>
          <img className='logo' src={logo} alt="Logo"/>
          <a className= 'menu' href="">O que é</a>
          <a className= 'menu' href="">Como funciona</a>
          <a className= 'menu' href="">Quero usar</a>
          <a className= 'menu' href="">Quem somos</a>
          <a className= 'menu' href="">Contato</a>
        </header>

        <div className='chamada'>
          <h3>Não sabe como falar com seu filho sobre educação financeira?</h3>
          <h3> O Pigbank pode te ajudar!</h3>
        </div>

        <div className='botaoInicialHeader'>
          <button>Como funciona</button>
          <button>Faça seu cadastro</button>
        </div>
      </div>
    );
  }
}

export default Header;