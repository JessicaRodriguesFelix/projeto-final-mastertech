import React, { Component } from 'react';
import '../contato/contato.css';
import facebook from '../contato/facebook.png';
import instagram from '../contato/instagram.png';
import youtube from '../contato/youtube.png';
import twitter from '../contato/twitter.png';

class contato extends Component {
  render() {
    return (
    
      <footer id="contato">
        <div className='contato-footer'>
              {/* <div className='logo-footer'>
                <img className='imglogo'src={logocontato} alt="Logo"/>     
              </div> */}
              <div className='conteudo-footer'>
                  <h3 className='titulo'>Ficou com alguma dúvida? Entre em contato</h3>  
                  <span className='email'> ✉ contato@pigbank.com.br</span>
                  <span className='fone'> ☏ (11) 4546-4000</span>                      
              </div>    
        <div class='rede-social'>  
            <div className="rede" id="facebook">
                <img className="icone" src={facebook} alt='facebook'/>
            </div>
            <div className="rede" id="instagram">
                <img className="icone" src={instagram} alt='instagram'/>
            </div>
            <div className="rede" id="twitter">
                <img className="icone" src={twitter} alt='twitter'/>
            </div> 
              <div className="rede" id="youtube">
                <img className="icone" src={youtube} alt='youtube'/>
            </div>  
          </div>                 
       </div>
      </footer>
    );
  }
}

export default contato;