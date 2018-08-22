import React, { Component } from 'react';
import './InternalFooter.css';
import download from '../internalfooter/download.jpg';

class InternalFooter extends Component {
    render() {
        return (
            <div className="footer-tamanhos">
            <footer className="footer-telas">
                <img className='download' src={download} alt="Download" />

            </footer>
            </div>

        )
    }
}

export default InternalFooter;