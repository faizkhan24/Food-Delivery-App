import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/LogoutPage.css';
import RegisterScreen from '../screens/RegisterScreen';
import LoginModal from '../screens/LoginModal';
import { useSelector } from 'react-redux';
import LogoutToggle from './LogoutToggle';
import Typed from 'typed.js'; // Import Typed.js

const LogoutPage = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const handleLoginClick = () => {
    setShowRegistrationModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleRegistrationClick = () => {
    setShowRegistrationModal(!showRegistrationModal);
    document.body.style.overflow = showRegistrationModal ? "auto" : "hidden";
  };

  const handleLoginButtonClick = () => {
    setShowRegistrationModal(true);
    document.body.style.overflow = "hidden";
  };
  const loveRef = useRef(null);

  useEffect(() => {
    const typeData = new Typed(loveRef.current, {
      strings: ['Love'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      showCursor: false,
    });
    

    return () => {
      typeData.destroy();
    };
  }, []);

  return (
    <div className='logout-container'>
      <nav className='navbar'>
        <img
          className='tomato-img'
          src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/header-img.png'
        ></img>
        <img className='logo' src='./images/logo02.png' alt='Logo' />
        <ul className='nav-items'>
          <li className='item-with-div'>
            ABOUT<div className='div-style'></div>
          </li>
          <li>
              {currentUser ? (
                  <LogoutToggle></LogoutToggle>
                ) : (
                  <li className="item-with-div">
                    <button onClick={handleLoginClick}  className="login-btn">
                      LOGIN
                    </button>
                  </li>
                )}
          </li>
        </ul>
      </nav>
         <div className='hero-section'>
      <div>
      <h1 className="heading">
          Handmade,
          <br />
          With an Extra
          <br />
          Pinch of <span ref={loveRef} className="love-text"></span>
        </h1>
        <p className='para'>"Indulge in the art of flavors, where every bite is a masterpiece waiting to be savored with love."</p>
        <div>
        <img className='cart-img' src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png'></img>
          <button  className='order-btn'>ORDER NOW</button>
        </div>
        
      </div>
      <div className='leaf-img'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/home-leaf.png' style={{width: '220px', height:"348px"}}></img>
      </div>
       <div className='pizza-image'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-img.png' style={{width: "490px", height:"507px"}}></img>
       </div>
       <div className='logo-img'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/buy-one-get.png'></img>
       </div>
       <div className='semi-circle'>
        <div ></div>
       </div>
       <div className='pizza2-img'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-img-bottom.png' style={{width: "286px", height:"294px"}}></img>
       </div>
       <div className='onion-image'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/onion.png'></img>
       </div>
      </div>

      
      <div className='section-2'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/daily-fresh.png' style={{width: "409px", height:"402px"}}></img>
        <p className='para2'>Daily fresh and always tasty</p>
        <p className='para3'>There are many variations of passages of Lorem Ipsum available, but the majority haved</p>
        <div className='garlic-img'>
          <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/daily-fresh-vacter.png' style={{width: "150px", height:"143px"}}></img>
        </div>
      </div>

      <LoginModal
        showLoginModal={showLoginModal}
        closeLoginModal={() => setShowLoginModal(false)}
      />

      <RegisterScreen
        showRegistrationModal={showRegistrationModal}
        setShowRegistrationModal={() =>
          setShowRegistrationModal(!showRegistrationModal)
        }
        closeModals={() => {
          setShowRegistrationModal(false);
          document.body.style.overflow = 'auto';
        }}
      />
    </div>
  );
};

export default LogoutPage