import React, { Component } from 'react';
import '../comoFunciona/comoFunciona.css';
import imgPasso1 from '../comoFunciona/passo1.png';
import imgPasso2 from '../comoFunciona/passo2.png';
import imgPasso3 from '../comoFunciona/passo3.png';
import imgPasso4 from '../comoFunciona/passo4.png';


class comoFunciona extends Component {
  render() {
    return (
        <section className='sectionComoFunciona' id="comoFunciona">
        <div className='listaComofunciona'>
                <h3 className= 'tituloComofunciona'>Como o Pigbank funciona?</h3>
            </div>

            <div className='listaComofunciona'>
                <div className='passos1e2'>
                    <img className='imgListaPassos' src={imgPasso1} alt=''/>
                    <p className='txtComofunciona'><strong>Cadastre-se e inclua as crianças.</strong> Podem ser filhos, sobrinhos, afilhados, irmãos, netos, ou qualquer criança que você tenha uma relação próxima e que queira ensinar educação financeira.</p>
                </div>

                <div className='passos1e2'>
                    <img className='imgListaPassos' src={imgPasso2} alt=''/>
                    <p className='txtComofunciona'><strong>Defina um objetivo.</strong> Que tal cadastrar aquele presente que a criança tanto quer e você ainda não conseguiu comprar? Uma bicicleta, um videogame, um celular, um brinquedo, qualquer sonho é permitido!</p>
                </div>
            </div>

            <div className='listaComofunciona'>
                <div className='passos3e4'>
                    <img className='imgListaPassos' src={imgPasso3} alt=''/>
                    <p className='txtComofunciona'><strong>Crie tarefas.</strong> Aqui está o diferencial do PigBank! Para dar à criança o sentimento de conquistar seus próprios objetivos, crie tarefas que você considera importante: ler, tirar boas notas na escola, praticar algum atividade física e pequenas tarefas domésticas são algumas das coisas que podem fazer parte da sua lista.</p>
                </div>

                <div className='passos3e4'>
                    <img className='imgListaPassos' src={imgPasso4} alt=''/>
                    <p className='txtComofunciona'><strong>Acompanhe de perto.</strong> Tudo no começo é estimulante, mas com o passar dos meses a criança pode esquecer do jogo e cabe a você lembrá-la e estimulá-la a continuar na missão de conquistar o objetivo. Lembre-se: a ideia é ensinar sobre educação financeira, e para que isso aconteça, o aprendizado precisa ser constante e regular.</p>
                </div>
            </div>

        </section>
    );
  }
}

export default comoFunciona;