import React from 'react';
import './Footer.css';
import { Button } from './Button';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };

  return (
    <footer className='footer-container' id='resume'>

        <div className='footer-left'>
        <p2> ▶ Made using React JS, HTML, CSS and JavaScript</p2>
        </div>
        

        <div className='footer-center'>
            <Button buttonStyle='btn--outline' buttonSize='btn--med' onClick={scrollToTop}>
            ▲ Return to top ▲
        </Button>
        </div>

    </footer>
  );
}

export default Footer;
