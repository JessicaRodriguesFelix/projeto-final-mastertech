import React, { Component } from 'react';
import './ResumoFilho.css';
import ListaObjetivos from '../listaobjetivos/ListaObjetivos';
import ListaTarefas from '../listatarefas/ListaTarefas';
import objetivosServices from '../../services/objetivosServices';
import tarefasService from '../../services/tarefasService';
import filhosSevice from '../../services/filhosService';





class ResumoFilho extends Component {
    constructor(props) {
        super(props)
        this.filho = filhosSevice.listFilhos()[0]

    }
    deleteObjetivo(index) {
        objetivosServices.deleteObjetivo(this.filho, index)
        this.forceUpdate();
    }

    render() {

        return (
            <div className="telaResumoDoFilho">
                <div className="sectionObjetivo">
                    <h1 className="meusObjetivos" > Meus Objetivos </h1>
                    <ListaObjetivos listaDeObjetivos={objetivosServices.listObjetivos(this.filho)} onItemClickListener={this.deleteObjetivo.bind(this)} />
                </div>
                <div className="sectionTarefas">
                    <h1 className="minhasTarefas"> Minhas Tarefas</h1>
                    <ListaTarefas listaDeTarefas={tarefasService.listTarefas(this.filho)} />
                </div>
            </div>
        );
    }
}

export default ResumoFilho;

