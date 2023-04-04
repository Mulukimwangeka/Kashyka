import React, { useState } from 'react';
import './App.css';
import logo from './Images/logo1.png';
import Partners from './Images/Partners.png'
import about from './Images/newabout.png'
import { faFacebookF, faTwitter, faInstagram, faTelegram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// function ScrollButton() {
//   const [visible, setVisible] = useState(false);

//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled > 300){
//       setVisible(true)
//     } 
//     else if (scrolled <= 300){
//       setVisible(false)
//     }
//   };

//   const scrollToTop = () =>{
//     window.scrollTo({
//       top: 0, 
//       behavior: 'smooth'
//     });
//   };

//   window.addEventListener('scroll', toggleVisible);

//   return (
//     <div className="scroll-button" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
//       <FontAwesomeIcon icon={faArrowUp} />
//     </div>
//   );
// }


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const menuIcon = document.querySelector('.menu-icon');
    if (menuOpen) {
      menuIcon.classList.remove('open');
    } else {
      menuIcon.classList.add('open');
    }
  };

  
  



  return (
    <div className="App">
      {/* Header */}
      <header class="header">
        <nav>
          <div class="nav-section">
            <div class="logo">
              <img src={logo} className="img" alt="Logo" />
            </div>
            <div class="wide-navlinks-section">
              <ul class="navlinks">
                <li>
                  <a href="#About" class='links-name'>About</a>
                </li>
                <li>
                  <a href="#works" class='links-name'>How it Works</a>
                </li>
                <li>
                  <a href="#Help" class='links-name'>Help</a>
                </li>
              </ul>
            </div>
            </div>
            <div class="mobile-menu-icon-section">
              <div
                class={`menu-icon ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
                {menuOpen ? (
                <div class="exit-icon" onClick={toggleMenu}>
                <span></span>
                <span></span>
                </div>
                ) : null}

                <ul class={`mobile-navlinks-section ${menuOpen ? 'open' : ''}`}>
                  <li>
                    <a href="#About" class='mobilelinks-name'>About</a>
                  </li>
                  <li>
                    <a href="#works" class='mobilelinks-name'>How it Works</a>
                  </li>
                  <li>
                    <a href="#Help" class='mobilelinks-name'>Help</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
      </header>


      {/* About Section */}
      <section id="About" className="about-section">
        <div className="about-container">
          {/* About Content */}
          <div className='about-content-container'>
          <h2 className='about-heading'>WHAT IS <span className='Green-highlight'>KASH</span>YKA?</h2>
          <p className='about-content'>A Secure and speedy money transfer platform for africa that prioritizes financial 
          inclusion and accessibility for all </p>
         
          </div>
          {/* IMAGE */}
          <div>          
          <img className='about-image' src={about} alt="aboutpicture"/>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="works" className="works-section">
        <div className="works">
          <h2 className='works-header'>How to Send Money With Kashyka</h2>
          <div className='works-container'>
            <div className='works-box'>
              <h3 className='circle1'>1</h3>
              <h4>Register Account</h4>
              <p className='works-content'>Enter your phone number
               ,other<br></br>
               details and
                choose a strong pin.</p>
              </div>
            <div className='works-box'>
              <h3 className='circle'>2</h3>
              <h4>Access Services</h4>
              <p className='works-content'>Enter your Registered 
              number,<br></br>Pin and click login </p>
              </div>
            <div className='works-box'>
              <h3 className='circle'>3</h3>
              <h4>Choose Services</h4>
              <p className='works-content'>
               Easily Log In and Select <br></br>the Service You Need
              </p>
              </div>
          </div>
            <div class="button-container">
                <button class="service-btn">Get Started</button>
            </div>


         </div>
      </section>

    {/* Parties invovled Section */}
    <section id="Parties" className="parties-section">
        <div className="parties-container">
        
          
          {/*partners image*/}
          <div className='partners-container'>
          <img src={Partners} alt="Partners" className='partners'/>
          </div>
          <div className='parties-header-container'>
        <h2 className='parties-header'>Payment parties</h2>
         </div>
          </div>
                {/* <ScrollButton /> */}

          </section>

    {/* help Section */}
    <section id="Help" className="help-section">
        <div className="help-container">
          <h2 className='help-header'>Everything you need to know about sending money With <span className='Green-highlight'>KASH</span>YKA?</h2>
          {/* Faqs questions */}
          <details>
             <summary className='summary'>How do I register?</summary>
              <p className='summary-p'>You can register with kashyka by providing your 
              phone number and other details and choosing a strong pin.
              </p>
           </details>

            <details>
              <summary className='summary'>How do I access my account?</summary>
              <p className='summary-p'>You can access your account by entering your phone number and pin.</p>
            </details>

            <details>
              <summary className='summary'>How do I send money?</summary>
              <p className='summary-p'>You can send money by selecting the send money option and entering the amount you want to send and the phone number of the person you want to send the money to.</p>
            </details>

            <details>
              <summary className='summary'>How do I receive money?</summary>
              <p className='summary-p'>You can receive money by selecting the receive money option and entering the amount you want to receive and the phone number of the person you want to receive the money from.</p>

            </details>
            




       </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <h2 className='footer-header'>Connect With Us</h2>
          
        <div className="social-media">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
          <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>



        </div>
          <p>&copy; 2023 kashyka. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

