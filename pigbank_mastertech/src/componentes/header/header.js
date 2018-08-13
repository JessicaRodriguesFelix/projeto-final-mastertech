import React, { Component } from 'react';
import './header.css';
import logo from '../header/logo-exemplo.jpg';

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
            <h2>Não sabe como falar com seu filho sobre educação financeira?</h2>
            <span> O Pigbank pode te ajudar!</span>
            <div className='botaoInicial'>
              <button>Como funciona</button>
              <button onClick={()=>this.openContainer()}>Faça seu cadastro</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;