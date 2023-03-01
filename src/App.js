import React from 'react';
import './App.css';
import logo from './Images/logo.png';
function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav>
        {/* a logo image */}
          <a  className="logo">
            <img src={logo} alt="Logo" />
          </a>
          <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#How it works">How it Works</a></li>
            <li><a href="#Help">Help</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="About" className="services-section">
        <div className="services-container">
          <h2>About</h2>
       
        </div>
      </section>

      {/* How it works Section */}
      <section id="How it works" className="team-section">
        <div className="team-container">
          <h2>How it works</h2>
         </div>
      </section>

    {/* contact Section */}
    <section id="Help" className="contact-section">
        <div className="services-container">
          <h2>Help</h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <p>&copy; 2023 Kayshka. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

