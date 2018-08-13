import React, { Component } from 'react';
import './App.css';
import Footer from './componentes/footer/Footer'
import Container from './componentes/container/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>PigBank</h1>
          
        </header>

        <Container/>
        
        <Footer/>
        
        
      </div>
    );
  }
}

export default App;
