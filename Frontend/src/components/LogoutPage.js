import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/LogoutPage.css'
import RegisterScreen from '../screens/RegisterScreen'
const LogoutPage = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  

  const handleLoginClick = () => {

    
    setShowRegistrationModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    
          <div className='logout-container'>
      <nav className='navbar'>
      <img className='tomato-img' src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/header-img.png'></img>
      <img className="logo" src="./images/logo02.png" alt="Logo" />
     <ul className='nav-items'>
     <li className="item-with-div">
                  ABOUT<div className="div-style"></div>
                </li>
      <li>
      <button  onClick={handleLoginClick} className='login-btn'>
      LOGIN
      </button>
      
      </li>
     </ul>
      </nav>
      <div className='hero-section'>
      <div>
         <h1 className='heading'>Handmade, With an Extra Pinch of 
         <span className='love-text'>Love</span> </h1>
        <p className='para'>"Indulge in the art of flavors, where every bite is a masterpiece waiting to be savored with love."</p>
        <div>
        <img className='cart-img' src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png'></img>
          <button  className='order-btn'>ORDER NOW</button>
        </div>
        
      </div>
      <div className='leaf-img'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/home-leaf.png'></img>
      </div>
       <div className='pizza-img'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-img.png'></img>
       </div>
       <div className='logo-img'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/buy-one-get.png'></img>
       </div>
       <div className='semi-circle'>
        <div ></div>
       </div>
       <div className='pizza2-img'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-img-bottom.png'></img>
       </div>
       <div className='onion-img'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/onion.png'></img>
       </div>
      </div>

      
      <div className='section-2'>
        <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/daily-fresh.png'></img>
        <p className='para2'>Daily fresh and always tasty</p>
        <p className='para3'>There are many variations of passages of Lorem Ipsum available, but the majority haved</p>
        <div className='garlic-img'>
          <img src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/daily-fresh-vacter.png'></img>
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
                document.body.style.overflow = "auto";
              }}
            />
      
    </div>  
    
   

  )
}

export default LogoutPage
