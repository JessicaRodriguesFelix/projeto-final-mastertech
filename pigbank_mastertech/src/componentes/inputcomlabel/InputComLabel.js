import React, { Component } from 'react';
import './InputComLabel.css';




class InputComLabel extends Component {
    render() {
        return (
            <div className="InputComLabel">
                <label>{this.props.label}</label>
                <div>
                    <input id={this.props.inputId} className="caixaDeTextoTransparente" type="text"></input>
                </div>
                
            </div>
        );
    }
}

export default InputComLabel;






