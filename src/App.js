import React from 'react';
import './App.css';
import logo from './Images/kayshkal.png';
import Partners from './Images/Partners.png'


function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
  <nav>
    <div className="nav-section">
      {/* a logo image */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navlinks-container">
        <ul className="navlinks-section">
          <li className="navlinks">
            <a href="#About" className='links-name'>About</a>
          </li>
          <li className="navlinks">
            <a href="#works" className='links-name'>How it Works</a>
          </li>
          <li className="navlinks">
            <a href="#Help" className='links-name'>Help</a>
          </li>
        </ul>
      </div>
    </div>
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
          <h2 className='works-header'>How to Send Money With Kashyka</h2>
          <div className='works-container'>
            <div className='works-box'>
              <h3 className='circle'>1</h3>
              <h4>Register Account</h4>
              <p className='works-content'>Enter your phone number
               and other<br></br>
               details and
                choose a strong pin.</p>
              </div>
            <div className='works-box'>
              <h3 className='circle'>2</h3>
              <h4>Access Services</h4>
              <p className='works-content'>Enter your Registered 
              Phone number<br></br> and Pin and click login </p>
              </div>
            <div className='works-box'>
              <h3 className='circle'>3</h3>
              <h4>Choose Services</h4>
              <p className='works-content'>
              Once you're logged in, browse through<br></br> our services and select the ones that you require.
              </p>
              </div>
          </div>
            <div class="button-container">
                <button class="service-btn">Get Services</button>
            </div>


         </div>
      </section>

    {/* Parties invovled Section */}
    <section id="Parties" className="parties-section">
        <div className="parties-container">
          <h2 className='parties-header'>Parties Involved</h2>
          
          {/*partners image*/}
          <div className='partners-container'>
          <img src={Partners} alt="Partners" className='partners'/>
          </div>
          </div>
          </section>

    {/* help Section */}
    <section id="Help" className="help-section">
        <div className="help-container">
          <h2 className='help-header'>Everything you need to know about sending money With <span className='Green-highlight'>KASH</span>YKA?</h2>
          {/* Faqs questions */}
          <details>
             <summary className='summary'>How do I register with Kashyka?</summary>
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
          
          {/* <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div> */}
          <p>&copy; 2023 kashyka. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

