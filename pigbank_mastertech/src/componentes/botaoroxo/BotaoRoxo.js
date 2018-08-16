import React, { Component } from 'react';
import './BotaoRoxo.css';




class BotaoRoxo extends Component {
    render() {
        return (
            <div className="estiloBotaoRoxo" onClick={this.props.onCloseListener}>
                <label className="botaoRoxo">
                    {this.props.conteudo}
                </label>
            </div>
        );
    }
}

export default BotaoRoxo;