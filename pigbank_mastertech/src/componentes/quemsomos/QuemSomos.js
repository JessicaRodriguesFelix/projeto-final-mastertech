import React, { Component } from 'react';
import './QuemSomos.css';
import porco from './porco.jpg';

class QuemSomos extends Component {

    openContainer(){
      this.props.history.push('/conteudo');
    }
  
    render() {
      return (
        <section className='sectionQuemSomos'>
          <h3 className= 'tituloQuemSomos'>Quem Somos</h3>
          <p className='paragrafoQuemSomos'>
          De acordo com o S&P Ratings Services, o Brasil é o 74º país no ranking mundial de educação financeira. Temos no nosso país cinco milhões de jovens entre 18 e 24 anos que já estão endividados. Será que esses jovens aprenderam sobre educação financeira em algum momento na vida? Por que não transformar essa realidade a partir da educação financeira desde a infância?

Nós do Pigbank acreditamos que podemos mudar a relação dos brasileiros com a economia e as finanças se começarmos a incentivar o contato com esses assuntos desde a infância. É nessa fase que desenvolvemos características e aprendizados que vão nos acompanhar durante toda a vida, então apostamos na educação financeira infantil de forma lúdica, simples e objetiva. Você também acredita? Vem com a gente!</p>
           <img className="porco" src={porco} alt='porco'/>
        </section>

      );
    }
  }
  
  export default QuemSomos;