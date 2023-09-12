import React, { Component } from 'react';
import './App.css'; 
import AptarLogo from './images/Aptar Logo.svg';
import BaeSystemsLogo from './images/bae-systems_logo.svg';
import BMWLogo from './images/BMW_logo_(gray)_4_w_66.webp';
import HondaLogo from './images/honda_logo.svg';
import HoneywellLogo from './images/honeywell-1-logo-black-and-white.webp';
import JOTALogo from './images/JOTA_logo.webp';
import KautexTextronLogo from './images/Kautex_Textron_Logo_Bw-1.webp';
import MercedesBenzLogo from './images/mercedes-benz_logo.webp';
import MichelinLogo from './images/michelin-tire-logo.webp';
import SiemensLogo from './images/Siemens_logo.svg';

class HeroBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideWidth: 140 + 10, // Width of one logo image + margin
    };
    this.sliderInterval = null; // Initialize sliderInterval
  }

  componentDidMount() {
    this.startSlider();
  }

  nextSlide = () => {
    const { slideWidth } = this.state;
    const logoSlider = this.logoSliderRef;

    logoSlider.style.transition = 'transform 1s ease-in-out'; // Adjust the transition duration
    const transformValue = -slideWidth;
    logoSlider.style.transform = `translateX(${transformValue}px)`;

    setTimeout(() => {
      const firstLogo = logoSlider.firstElementChild;
      logoSlider.appendChild(firstLogo);
      logoSlider.style.transition = 'none'; // Disable transition for instant movement
      logoSlider.style.transform = 'translateX(0px)'; // Slide to the next logo
    }, 1000);
  };

  startSlider = () => {
    this.sliderInterval = setInterval(this.nextSlide, 5000); // Auto slide every 5 seconds
  };

  pauseSlider = () => {
    clearInterval(this.sliderInterval);
    this.setState({ isPaused: true }); // Set isPaused to true when paused
  };

  resumeSlider = () => {
    if (!this.state.isPaused) {
      this.startSlider(); // Resume the slider only if it was not manually paused
    }
    this.setState({ isPaused: false }); // Set isPaused to false when resumed
  };

  render() {
    return (
      <div className="hero-banner">
        <div className="banner-text">
          <h6>Monolith</h6>
          <h1>Use AI software to test less and learn more.</h1>
          <p>
            Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run.
          </p>
        </div>
        <div className="banner-buttons">
          <button>REQUEST DEMO</button>
          <button>SPEAK TO OUR TEAM</button>
        </div>

        <div className="logo-slider-container">
        <div
          className="logo-slider"
          ref={(ref) => (this.logoSliderRef = ref)} // Store a reference to the logoSlider element
          onMouseEnter={this.pauseSlider} // Pause the slider on mouse enter
          onMouseLeave={this.resumeSlider} // Resume the slider on mouse leave
        >
          <img src={AptarLogo} alt="Logo 1" />
  <img src={BaeSystemsLogo} alt="Logo 2" />
  <img src={BMWLogo} alt="Logo 3" />
  <img src={HondaLogo} alt="Logo 4" />
  <img src={HoneywellLogo} alt="Logo 5" />
  <img src={JOTALogo} alt="Logo 6" />
  <img src={KautexTextronLogo} alt="Logo 7" />
  <img src={MercedesBenzLogo} alt="Logo 8" />
  <img src={MichelinLogo} alt="Logo 9" />
  <img src={SiemensLogo} alt="Logo 10" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeroBanner;
