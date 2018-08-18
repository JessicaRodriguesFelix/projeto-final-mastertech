import React, { Component } from 'react';
import './Abas.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ObjetivosDoFilho from '../objetivosdofilho/ObjetivosDoFilho';
import MaeListaTarefas from '../maelistatarefas/MaeListaTarefas';
import filhosService from '../../services/filhosService'

class Abas extends Component {
    constructor(props) {
        super(props);
        const filho = filhosService.buscaFilhoPeloNome(this.props.match.params.nome)
        this.state = { filho: filho };
    }

    render() {
        console.log(this.state.filho)
        return (
            <Tabs>
                <TabList>
                    <Tab >Objetivo</Tab>
                    <Tab >Tarefas</Tab>
                </TabList>

                <TabPanel >
                    <ObjetivosDoFilho filho={this.state.filho} />
                </TabPanel>
                <TabPanel>
                    <MaeListaTarefas />
                </TabPanel>
            </Tabs>
        );
    }
}
export default Abas;