import React from 'react';
import Resume from './downloads/Andrew Cornell Web Engineer Resume.pdf';
import QRcode from './img/contactQR.png'

const Contact = () => {
  return (
    <div className='Contact Section' id="contact">
      <h1>Contact</h1>
      <hr/>
      <div className='ContactCont'>
        <h3>Andrew Cornell<br/>San Francisco, CA<br/>(831) 419–4106</h3> 
        <img className="QRimage" src={QRcode} alt="My QR Code"/>
        <div className="ContactLinks">
          <a className='Button' href="mailto:contact@andrewjcornell.com">email</a>
          <a className='Button' href="https://www.linkedin.com/in/andrewjcornell/">linkedin</a>
          <a className='Button' href="https://github.com/andrewjc88">github</a>
          <a className='Button' href={Resume} download>Resume</a>
        </div>
      </div>
    </div>
  )
};

export default Contact;