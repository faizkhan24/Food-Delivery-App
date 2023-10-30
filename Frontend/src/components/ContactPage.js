import React from 'react'
import '../components/ContactPage.css'
const ContactPage = () => {
  return (
    <div className='contactUs-wrapper'>
    <div className='contactUs-container'>
        <h1 className='contact-heading'>Contact Us</h1>
        <p className='contact-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className='navto-home-contact'>
        <span>Home</span>
        <span>/</span>
        <span>Contact Us</span> 
        </div>
        <img className='olive-img' src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/black-jamun.png'></img>
        <img className='onion-img' src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/onion.png'></img>
        <img className='tamato-img' src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/tamato.png'></img>
        <img className='leaf-img' src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-leaf.png'   style={{ position: "absolute" }}></img> 
         </div> 
       <div className='sub-heading-container'>
       <h2 className='sub-heading'>Consultation</h2>
        <span className='horizonal-line'>_________</span>
        
            <h2 className='sendUs-heading'>Send Us Message</h2> 
            <input className='name-input' name='name-field' placeholder='Name*'></input>
            <input className='email-input' name='email' placeholder='Email*'></input>
            <input className='phone-input' name='phone' placeholder='Phone*'></input>
            <input className='website-input' name='website' placeholder='Website'></input>
            <textarea className='message-field' name='text-msg' rows="4" cols="58" placeholder='Write Message'></textarea>
            <img className='right-img' src='https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cons-img.jpg'></img>
            <button className='send-msg-btn'>SEND MESSAGE</button>
       </div>
       

      
       
  
    </div>
  )
}

export default ContactPage
