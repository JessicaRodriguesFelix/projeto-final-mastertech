import React, { Component } from 'react';
import './Footer.css';
import download from '../footer/download.jpg';

class Footer extends Component {
  render() {
    return (
        <div>
        <footer className="footer-telas">
        <img className='download'  src={download} alt="Download" />
      
        
        </footer>
          
     
    
      </div>
    )
  }
}

export default Footer;