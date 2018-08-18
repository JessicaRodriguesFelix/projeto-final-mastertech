import React, { Component } from 'react';
import './Abas.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ObjetivosDoFilho from '../objetivosdofilho/ObjetivosDoFilho';
import MaeListaTarefas from '../maelistatarefas/MaeListaTarefas';

class Abas extends Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab  >Objetivo</Tab>
                    <Tab >Tarefas</Tab>
                </TabList>

                <TabPanel >
                    <ObjetivosDoFilho/>
                </TabPanel>
                <TabPanel>
                    <MaeListaTarefas/>
                </TabPanel>
            </Tabs>
        );
    }
}
export default Abas;