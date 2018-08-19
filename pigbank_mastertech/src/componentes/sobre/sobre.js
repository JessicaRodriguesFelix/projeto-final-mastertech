import React, { Component } from 'react';
import '../sobre/sobre.css';
import img1 from '../sobre/poupanca-menino.jpeg';
import img2 from '../sobre/poupanca-menino-3.png';


class Sobre extends Component {
  render() {
    return (
        <section className='sectionSobre'>
            <div className='paragrafoSobre'>
                <p>Falar sobre dinheiro com as crianças nunca foi tão fácil :)</p>
                <p>Mostre a elas como podem realizar pequenos e grandes sonhos ao definirem objetivos e se dedicarem a ele.</p>
            </div>

            <div className='vantagensReunidas'>
                <div className='vantagens'>
                    <img className='imgSobre' src={img1} alt="menino-1"/>
                    <h3 className='subtituloVantagens'>Valores</h3>
                    <p className='paragrafoVantagens'>Com tarefas simples, a criança descobre quanto precisou fazer para alcançar determinado objetivo, valorizando suas conquistas.</p>
                </div>

                <div className='vantagens'>
                    <img className='imgSobre' src={img2} alt="menino-2"/>
                    <h3 className='subtituloVantagens'>Consumo consciente</h3>
                    <p className='paragrafoVantagens'>Ensine o valor das coisas. Ajude-o a consumir de forma planejada, em busca de realização de sonhos.</p>
                </div>
            </div>
        </section>
    );
  }
}

export default Sobre;