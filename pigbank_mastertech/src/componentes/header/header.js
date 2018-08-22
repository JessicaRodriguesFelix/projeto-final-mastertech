import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
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
          <a className= 'menu' href="#sobre"><Scrollchor className="scroll" to="sobre"> O que é </Scrollchor></a>
          <a className= 'menu' href="#comoFunciona"><Scrollchor className="scroll" to="comoFunciona"> Como funciona </Scrollchor></a>
          <a className= 'menu' href="">Quero usar</a>
          <a className= 'menu' href="#quemSomos"><Scrollchor className="scroll" to="quemSomos">Quem somos </Scrollchor></a>
          <a className= 'menu' href="#contato"><Scrollchor className="scroll" to="contato">Contato </Scrollchor></a>
        </header>

        <div className='chamada'>
          <h3>Não sabe como falar com seu filho sobre educação financeira?</h3>
          <h3> O Pigbank pode te ajudar!</h3>
        </div>

        <div className='botaoInicialHeader'>
          <button className='botaoComoFunciona'><Scrollchor id='botaoIdComoFunciona' to="comoFunciona">Como funciona</Scrollchor></button>
          <button className='botaoCadastroHeader'>Faça seu cadastro</button>
        </div>
      </div>
    );
  }
}

export default Header;