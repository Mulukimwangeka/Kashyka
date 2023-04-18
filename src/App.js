import React, { useState } from 'react';
import './App.css';
import logo from './Images/FastaPayLogo.png';
import Partners from './Images/Partners.png'
import about from './Images/aboutfast.jpg'
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
          <h2 className='about-heading'>WHAT IS <span className='Green-highlight'>FASTA-</span>PAY?</h2>
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
          <h2 className='works-header'>How to Send Money With Fasta-Pay</h2>
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
          <div class="dropdown">
  <button class="service-btn dropdown-btn">Get Started</button>
  <div class="dropdown-content">
    <a href="https://web.fasta-pay.com/" class="app-option">Use App</a>
    <a href="https://t.me/KashykaPaymentbot" class="telegram-option">Join Telegram Bot</a>
  </div>
</div>




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
          <h2 className='help-header'>Everything you need to know about sending money With <span className='Green-highlight'>FASTA-</span>PAY?</h2>
          {/* Faqs questions */}
          <details>
          <summary className='summary'>How do I register with Fasta-Pay?</summary>
          <p className='summary-p'>You can register in 3 easy ways:
          <ul>
           <li>via SMS</li> 
           <li>using our webapp - simply click on the "Get Started" link, choose "Use App", and you'll be directed to our web-app to start transacting.</li> 
           <li>using our bot - download Telegram and search for "KashykaBot", or dial *607*20# to receive a link via SMS to access the bot.</li>
          </ul>
          </p> 
           </details>

           <details>
    <summary className='summary'>Get started with Fasta-pay App?</summary>
    <p className='summary-p'>
        To access your account on the app, follow these simple steps:
        <ul>
            <li>Click on the "Use App" option in the "Get Started" button on our website.</li>
            <li>This will take you to a new page where you will see two options:</li>
            <ul>
                <li>"Access Services" for returning users</li>
                <li>"Register" for new users</li>
            </ul>
            <li>If you're a new user, click on "Register" and enter your personal details to create an account and access our services.</li>
            <li>If you're a returning user, simply enter your registered details and proceed to our services.</li>
        </ul>
    </p>
</details>

<details>
    <summary className='summary'>What services does Fasta-pay offer?</summary>
    <p className='summary-p'>
        Fasta-pay offers a wide range of services to meet your financial needs. Here are some of the services that we offer:
        <ul>
            <li>P2P platform: Our platform allows users to send money to other users via SMS, bot and app.</li>
            <li>Paybill: Users can receive payments from third-party platforms and use them to pay bills or transfer funds to other users on Fasta-pay.</li>
            <li>Withdraw: Users can withdraw funds from their Fasta-pay wallet to other third-party platforms.</li>
            <li>Airtime: Users can buy airtime for themselves or send airtime to other users on the Fasta-pay platform.</li>
            <li>Buy goods and services: Users can also use Fasta-pay to purchase goods and services from participating merchants.</li>
        </ul>
        With Fasta-pay, you can enjoy convenient and secure financial services, including the ability to buy goods and services, from the comfort of your home or office. Sign up now to start using our services!
    </p>
</details>

<details>
    <summary className='summary'>How can you contact us?</summary>
    <p className='summary-p'>
        We're always here to help you out. You can contact us through any of the following channels:
        <ul>
            <li>Telegram bot: Chat with our Telegram bot to quickly get answers to common questions or for assistance with your account.</li>
            <li>Social media: Reach out to us on Facebook, Twitter, or Instagram for any inquiries or feedback.</li>
        </ul>
        We're constantly working to improve our support capabilities and provide the best possible service to our users. Please don't hesitate to contact us - we're always happy to hear from you!
    </p>
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
          <p>&copy; 2023 Fasta-Pay. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

