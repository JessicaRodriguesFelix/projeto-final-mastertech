import React, { Component } from 'react';
import './Container.css';
import MaeListaFilhos from '../maelistafilhos/MaeListaFilhos'


class Container extends Component {
  render() {
    return (
      <div >
        <section className="meio">

        <MaeListaFilhos/>
        
        </section>
          
        
       
        
        
      </div>
    );
  }
}

export default Container;