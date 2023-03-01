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

      {/* Services Section */}
      <section id="About" className="services-section">
        <div className="services-container">
          <h2>About</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="service-card">
              <h3>Graphic Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="service-card">
              <h3>SEO</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="How it works" className="team-section">
        <div className="team-container">
          <h2>How it works</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Team Member" />
              <h3>John Doe</h3>
              <p>Co-Founder</p>
            </div>
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Team Member" />
              <h3>Jane Doe</h3>
              <p>Designer</p>
            </div>
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Team Member" />
              <h3>Bob Smith</h3>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </section>
    {/* contact Section */}
    <section id="Help" className="contact-section">
        <div className="services-container">
          <h2>Help</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="service-card">
              <h3>Graphic Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="service-card">
              <h3>SEO</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <p>&copy; 2023 My Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

