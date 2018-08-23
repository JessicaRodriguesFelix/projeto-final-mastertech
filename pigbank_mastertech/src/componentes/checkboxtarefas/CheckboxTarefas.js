import React, { Component } from 'react';
import './CheckboxTarefas.css';

class CheckboxTarefas extends Component {
    render() {
        return (
            <label htmlFor={this.props.CheckID}>
                <div className="round">
                    <input type="checkbox" id={this.props.CheckID} />
                    <div class="icon"></div>
                </div>

                {this.props.label}
            </label>
        );
    }
}

export default CheckboxTarefas;
