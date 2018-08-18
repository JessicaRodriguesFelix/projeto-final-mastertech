import React, { Component } from 'react';
import './CheckboxTarefas.css';

class CheckboxTarefas extends Component {
    render() {
        return (

            <div className="round">
                <input type="checkbox" id={this.props.CheckID} />
                <label htmlFor={this.props.CheckID}></label>
            </div>

        );
    }
}

export default CheckboxTarefas;
