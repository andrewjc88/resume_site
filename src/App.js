import React, { Component } from 'react';
import ProjectsCarousel from './ProjectsCarousel';
import LogoCarousel from './LogoCarousel';
import RecCarousel from './recCarousel'
import Contact from './contact';
import AOS from 'aos';
import Logo from './img/logo.png';
import Me from './img/me.jpg';
import './App.css';

class App extends Component {

  state = {
    clicked: false
  }

  contactClicked = () => {
    this.setState(() => ({clicked: true }));
  };

  render() {

    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      // delay: 2,
    });

    return (
      <div className="App">
        <div className='Intro Section' >
          <img src={Logo} className="Logo" alt="Andrew Cornell logo" data-aos="fade-in"/>
        </div>
        <div data-aos="fade-up">
          <div className='About Section'>
            <h1>About</h1>
            <hr/>
            <div className='AboutCont'>
              <img src={Me} className='Selfie'  alt="a photo of myself"/>
              <p className="AboutMe">
                Senior Full Stack Engineer eight with years of experience with React and a strong background in design. I love JavaScript for breakfast, lunch, and dinner. An ardent fan of all things Open Source. Let's build something great together!
              </p>
            </div>
          </div>
        </div>

        {/* <div data-aos="fade-up">
          <div className='Projects Section'>
            <h1>Projects</h1>
            <hr/>
            <br className='line'/>
              <div className='Carousel'>
                <ProjectsCarousel/> 
              </div>
          </div>
        </div> */}

        <div data-aos="fade-up">
          <div className='RecCarousel Section'>
            <h1>Recommendations</h1>
            <hr/>
            <div className='Carousel'>
              <RecCarousel/>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className='Tools Section' >
            <h1>Tools</h1>
            <hr/>
            <p>Here are some of my favorite tools and technologies that I love to use to make the things that&nbsp;I&nbsp;make. </p>
            <LogoCarousel/>
          </div>
        </div>

        <div data-aos="fade-in" id="bottom">
          <Contact/>
        </div>

        <div className='footer' >
          <span>Site By Andrew Cornell 2019. All rights reserved.</span>
        </div>

        {
          this.state.clicked === false && 
            <div className='Contact-Button'>
              <a 
                href="#bottom" 
                onClick={this.contactClicked}
                className="Button {this.state.clicked}">
                Contact
              </a>
            </div>
        }

      </div>
    );
  }
}

export default App;
