import React, { Component } from 'react';
import './InputComData.css';




class InputComData extends Component {
    render() {
        return (
            <div className="InputComLabel">
                <label>{this.props.label}</label>
                <div>
                    <input id={this.props.inputId} className="caixaDeTextoTransparente" type="text"></input>
                    <input className="caixaDeTextoTransparente" type="date" ></input>
        
                </div>
                
                
            </div>
        );
    }
}

export default InputComData;