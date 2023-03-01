import React from 'react';
import './App.css';
import logo from './Images/logo.png';
import Africa from './Images/AFRICA.png';
import Partners from './Images/Partners.png'


function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav>
        {/* a logo image */}
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className='navlinks-section'>
            <li className='navlinks'><a href="#About">About</a></li>
            <li className='navlinks'><a href="#works">How it Works</a></li>
            <li className='navlinks'><a href="#Help">Help</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="About" className="about-section">
        <div className="about-container">
          <h2 className='about-heading'>WHAT IS <span className='Green-highlight'>KASH</span>YKA?</h2>
          <p className='about-content'>A Secure and speedy money transfer</p>
          <p className='about-content'>platform for africa that prioritizes</p>
          <p className='about-content'>financial inclusion and accessibility </p>
          <p className='about-content'>for all.</p>
          {/* IMAGE */}
          {/* <img className='about-image' src={Africa} alt="Africa"/> */}
        </div>
      </section>

      {/* How it works Section */}
      <section id="works" className="works-section">
        <div className="works">
          <h2 className='works-header'>How to Send Money With Kayshka</h2>
          <div className='works-container'>
            <div className='works-box'>
              <h3 className='circle'>1</h3>
              <h4>Register</h4>
              <p>This is through your phone number and other<br></br>
               details and choose a strong pin.</p>
              </div>
            <div className='works-box'>
              <h3 className='circle'>2</h3>
              <h4>Access Services</h4>
              <p>This is by Entering your Phone number and Pin </p>
              </div>
            <div className='works-box'>
              <h3 className='circle'>3</h3>
              <h4>Choose Services</h4>
              <p>Select the services you require, and start using them.</p>
              </div>
          </div>
          {/* Get services button */}
          <button className='service-btn'>Get services</button>
         </div>
      </section>

    {/* Parties invovled Section */}
    <section id="Parties" className="parties-section">
        <div className="parties-container">
          <h2>Parties Involved</h2>
          
          {/*partners image*/}
          <img src={Partners} alt="Partners"/>
          </div>
          </section>

    {/* help Section */}
    <section id="Help" className="help-section">
        <div className="help-container">
          <h2>Everything you need to know about sending money With KAYSHKA</h2>
          {/* Faqs questions */}
          <details>
             <summary className='summary'>How do I register with Kayshka?</summary>
              <p>You can register with Kayshka by providing your 
              phone number and other details and choosing a strong pin.
              </p>
           </details>

            <details>
              <summary className='summary'>How do I access my account?</summary>
              <p>You can access your account by entering your phone number and pin.</p>
            </details>

            <details>
              <summary className='summary'>How do I send money?</summary>
              <p>You can send money by selecting the send money option and entering the amount you want to send and the phone number of the person you want to send the money to.</p>
            </details>

            <details>
              <summary className='summary'>How do I receive money?</summary>
              <p>You can receive money by selecting the receive money option and entering the amount you want to receive and the phone number of the person you want to receive the money from.</p>
            </details>
            




       </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          
          {/* <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div> */}
          <p>&copy; 2023 Kayshka. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

