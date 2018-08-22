import React, { Component } from 'react';
import './InputComOpcoes.css';

class InputComOpcoes extends Component {

    render() {
        return (
            <div className="InputComLabel">
                <label>{this.props.label}</label>
                <div>
                    <input list="caixaDeTextoTransparente" id={this.props.inputId} className="caixaDeTextoTransparente"></input>

                    <datalist id="caixaDeTextoTransparente">
                        <option value="lavar louça - Semanalmente" />
                        <option value="Ler um livro - mensalmente" />
                        <option value="Comer feijão - Semanalmente" />
                        <option value="Tirar o lixo - Semanalmente" />
                        <option value="Arrumar a cama - Diariamente" />
                        <option value= "Regar as plantas - semanalmente"/>
                        <option value= "Arrumar o quarto - semanalmente"/>
                        <option value= "Assistir um filme - semanalmente"/>
                        <option value= "Andar de bicicleta - semanalmente"/>
                        <option value= "Tirar o prato da mesa - Diariamente"/>
                        <option value= "Guardar os brinquedos - Diariamente"/>
                        <option value= "Dar comida para os pets - Diariamente"/>
                        <option value= "Brincar com o(s) irmão(s) - Diariamente"/>
                        <option value= "Arrumar a mochila da escola - Diariamente"/>
                        <option value= "Passear com os pais, sem tablet - semanalmente"/>
                        <option value= "Arrumar a mesa para uma refeição - Diariamente"/>
                        <option value= "Guardar os sapatos e roupas da escola - Diariamente"/>
                        <option value= "Dormir cedo (combinar horário com a criança) - Diariamente"/>
                        <option value= "Comer um alimento (escolher com a criança) - semanalmente "/>
                    </datalist>
                </div>
         
            </div>



        );
    }
}

export default InputComOpcoes;
