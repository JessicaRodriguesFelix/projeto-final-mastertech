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
                        <option value="lavar louça Semanalmente" />
                        <option value="Ler um livro mensalmente" />
                        <option value="Comer feijão Semanalmente" />
                        <option value="Tirar o lixo Semanalmente" />
                        <option value="Arrumar a cama Diariamente" />
                    </datalist>
                </div>
                {/* <h1>Regar as plantas</h1> semanalmente
        <h1>Arrumar o quarto</h1> semanalmente
        <h1>Assistir um filme</h1> semanalmente
        <h1>Andar de bicicleta</h1> semanalmente
        <h1>Tirar o prato da mesa</h1> Diariamente
        <h1>Guardar os brinquedos</h1> Diariamente
        <h1>Dar comida para os pets</h1> Diariamente
        <h1>Brincar com o(s) irmão(s)</h1> Diariamente
        <h1>Arrumar a mochila da escola</h1> Diariamente
        <h1>Passear com os pais, sem tablet</h1> semanalmente
        <h1>Arrumar a mesa para uma refeição</h1> Diariamente
        <h1>Guardar os sapatos e roupas da escola</h1> Diariamente
        <h1>Dormir cedo (combinar horário com a criança)</h1> Diariamente
                <h1>Comer um alimento (escolher com a criança)</h1> semanalmente */}
            </div>



        );
    }
}

export default InputComOpcoes;
