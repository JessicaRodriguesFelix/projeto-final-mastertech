import React, { Component } from 'react';
import './BotaoBranco.css';




class BotaoBranco extends Component {
    render() {
        return (
            <div className="estiloBotaoBranco" onClick={this.props.onClickListener}>
              <label className="botaoBranco" >
                {this.props.conteudo}
            </label>
            </div>
        );
    }
}

export default BotaoBranco;