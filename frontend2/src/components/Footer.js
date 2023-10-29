import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div> 
        <Link  style={{textDecoration: 'none'}} >
        
          <div className='footer-section'>
          <img className='logo-on-footer' src="./images/logo03.png" alt="Logo" />
          <div className='Information-container'>
            <h2 className='list-heading'>INFORMATION</h2>
            <ul className='info-list'>
                <li className='list-items'>Home</li>
                <li className='list-items'>Blog</li>
                <li className='list-items'>About Us</li>
                <li className='list-items'>Menu</li>
                <li className='list-items'>Contact Us</li>
            </ul>
          </div>

          <div className='topitem-container'>
            <h2>TOP ITEMS</h2>
            <ul className='info-list'>
                <li className='list-items'>Non Veg Supreme</li>
                <li className='list-items'>English Retreat Pizza</li>
                <li className='list-items'>Peri Peri Veg Pizza</li>
                <li className='list-items'>italian pasta</li>
                <li className='list-items'>Penne pasta</li>
            </ul>

          </div>

          <div className='other-container'>
            <h2>OTHERS</h2>
            <ul  className='info-list'>
                <li  className='list-items'>Checkout</li>
            <li  className='list-items'>Cart</li>
            <li  className='list-items'>Product</li>
            <li  className='list-items'>Location</li>
            <li  className='list-items'>Legal</li>
            </ul>
            
          </div>
          <div className='social-media-container'>
            <h2>SOCIAL MEDIA</h2>
            <div className='socialmedia-icon'>
            <img className='socialmedia-logo' src='./images/facebook.png'></img>
            <img className='socialmedia-logo'  src='./images/pinterest.png'></img>
            <img className='socialmedia-logo'  src='./images/twitter.png'></img>
            <img className='socialmedia-logo'   src='./images/linkedin.png'></img>

            </div>
            <p>Signup and get exclusive offers and coupon codes</p>
            <button className='login-btn sign-up-btn'>SIGN UP</button>
          </div>

      </div>  
        </Link>
      
    </div>
  )
}

export default Footer
