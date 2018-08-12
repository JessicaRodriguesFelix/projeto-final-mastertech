import React, { Component } from 'react';
import '../header/header.css';
import logo from '../header/logo-exemplo.jpg';

class Header extends Component {
  render() {
    return (
      <header>
        <img className='logo' src={logo} alt="Logo"/>

        <div className='menu'>
          <a href="">O que é</a>
          <a href="">Como funciona</a>
          <a href="">Quero usar</a>
          <a href="">Quem somos</a>
          <a href="">Contato</a>
        </div>

        <section className='chamada'>
            <h2>Não sabe como falar com seu filho sobre educação financeira?</h2>
            <span> O Pigbank pode te ajudar!</span>
            <div className='botaoInicial'>
              <button>Como funciona</button>
              <button>Faça seu cadastro</button>
            </div>
        </section>
      </header>
    );
  }
}

export default Header;