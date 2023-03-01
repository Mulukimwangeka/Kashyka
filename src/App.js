import React from 'react';
import './App.css';
import logo from './Images/logo.png';
import Africa from './Images/AFRICA.png';
function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav>
        {/* a logo image */}
          <a className="logo">
            <img src={logo} alt="Logo" />
          </a>
          <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#works">How it Works</a></li>
            <li><a href="#Help">Help</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="About" className="about-section">
        <div className="about-container">
          <h2>WHAT IS KAYSHKA?</h2>
          <p>A SECURE AND SPEEDY MONEY TRANSFER</p>
          <p>PLATFORM FOR AFRICA that prioritizes</p>
          <p>financial inclusion and accessibility </p>
          <p>for all.</p>
          {/* IMAGE */}
          <img src={Africa} alt="Group-1" border="0" />
        </div>
      </section>

      {/* How it works Section */}
      <section id="works" className="works-section">
        <div className="works-container">
          <h2>How to Send Money With Kayshka</h2>
         </div>
      </section>

    {/* contact Section */}
    <section id="Help" className="help-section">
        <div className="help-container">
          <h2>Everything you need to know about sending money With KAYSHKA</h2>
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

