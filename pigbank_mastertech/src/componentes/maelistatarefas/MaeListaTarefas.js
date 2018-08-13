import React, { Component } from 'react';
import './MaeListaTarefas.css';
import AdicionarTarefas from '../adicionartarefas/AdicionarTarefas';
import ListaTarefas from '../listatarefas/ListaTarefas';


class MaeListaTarefas extends Component {
  render() {
    return (
      <div>
        
        <div className="ListaDeTarefasMae">

          <p> Crie tarefas simples para criar hábitos importantes para a ###### e que transmitam valores para sua família.

Tenho algumas sugestões de tarefas, mas você pode adicionar outras tarefas que não estejam na lista, veja:</p>


        </div>

        <AdicionarTarefas/>
        <ListaTarefas/>
      

      </div>
    );
  }
}

export default MaeListaTarefas;