import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../components/LogoutPage.css";
import RegisterScreen from "../screens/RegisterScreen";
import LoginModal from "../screens/LoginModal";
import { useSelector } from "react-redux";
import LogoutToggle from "./LogoutToggle";
import Typed from "typed.js"; // Import Typed.js


const LogoutPage = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const handleLoginClick = () => {
    setShowRegistrationModal(true);
    document.body.style.overflow = "hidden";
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

  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const typeData = new Typed(loveRef.current, {
      strings: ["Love"],
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
    <div className="logout-container">
      <nav className="navbar">
        <img
          className="tomato-img"
          src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/header-img.png"
        ></img>
        <img className="logo" src="./images/logo02.png" alt="Logo" />
        <ul className="nav-items">
          <li
            className="item-with-div"
            onClick={() =>
              aboutSectionRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            ABOUT<div className="div-style"></div>
          </li>
          <li>
            {currentUser ? (
              <LogoutToggle></LogoutToggle>
            ) : (
              <li className="item-with-div">
                <button onClick={handleLoginClick} className="login-btn">
                  LOGIN
                </button>
              </li>
            )}
          </li>
        </ul>
      </nav>
      <div className="hero-section">
        <div>
          <h1 className="heading">
            Handmade,
            <br />
            With an Extra
            <br />
            Pinch of <span ref={loveRef} className="love-text"></span>
          </h1>
          <p className="para">
            "Indulge in the art of flavors, where every bite is a masterpiece
            waiting to be savored with love."
          </p>
          <div>
            <img
              className="cart-img"
              src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png"
            ></img>
            <button className="order-btn">ORDER NOW</button>
          </div>
        </div>
        <div className="leaf-img">
          <img
            src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/home-leaf.png"
            style={{ width: "220px", height: "348px" }}
          ></img>
        </div>
        <div className="pizza-image">
          <img
            src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-img.png"
            style={{ width: "490px", height: "507px" }}
          ></img>
        </div>
        <div className="logo-img">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/buy-one-get.png"></img>
        </div>
        <div className="semi-circle">
          <div></div>
        </div>
        <div className="pizza2-img">
          <img
            src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-img-bottom.png"
            style={{ width: "286px", height: "294px" }}
          ></img>
        </div>
        <div className="onion-image">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/onion.png"></img>
        </div>
      </div>
  
      <div className="section-2">
        <img
          src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/daily-fresh.png"
          style={{ width: "409px", height: "402px" }}
        ></img>
        <p className="para2">Daily fresh and always tasty</p>
        <p className="para3">
          There are many variations of passages of Lorem Ipsum available, but
          the majority haved
        </p>
        <div className="garlic-img">
          <img
            src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/daily-fresh-vacter.png"
            style={{ width: "150px", height: "143px" }}
          ></img>
        </div>
      </div>

   <div className="section-3">
        <div className="main-head">
          <p className="our-strength-heading">Our Strength</p>
          <div className="div-line"></div>
        </div>
        <h2 className="heading-2">Why We Are The Best?</h2>
        <div className="strength-container">
          <div>
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/all-kinds-of-foods.png"></img>
            <h3 className="strength-heading">All kinds of Foods</h3>
            <p className="strength-para">
              Diverse global cuisine, from spicy curries to delicate pastries,
              unites cultures through flavorful experiences.
            </p>
          </div>
          <div>
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/fresh-foods.png"></img>
            <h3 className="strength-heading">Fresh Foods</h3>
            <p className="strength-para">
              Fresh foods, vibrant and nutritious, form the foundation of a
              healthy and invigorating diet.
            </p>
          </div>

          <div>
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/best-taste.png"></img>
            <h3 className="strength-heading">Best Taste</h3>
            <p className="strength-para">
              The best taste, subjective and diverse, varies with culture,
              preferences, and individual palates.
            </p>
          </div>

          <div>
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/on-time-delivery.png"></img>
            <h3 className="strength-heading">On Time Delivery</h3>
            <p className="strength-para">
              On-time delivery ensures customer satisfaction, a seamless
              experience, and trust in service reliability.
            </p>
          </div>
        </div>

        <img
          className="pizza-slice"
          src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/strength-vacter.png"
        ></img>
      </div>

     
     

      <div className="section-4" >
        <img
          className="pizza2-img" 
          src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/our-story.png"
        ></img>
        <div className="Our-story-container" ref={aboutSectionRef}>
          <div className="main-head-2">
            <p className="Our-story-heading1"  >
              Our Story
            </p>
            <div className="div-line-2"></div>
          </div>
          <h2 className="our-story-heading2" >
            The FriendlyMeal Has Excellent Of Quality Foods
          </h2>
          <p className="our-story-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>

      <div className="section-5">
        <div className="testimonial-head">
          <p className="testimonial-heading1">Customer Feedback</p>
           <div className="div-line-3"></div>
        </div>
       

        <h2 className="testimonial-heading2">Client Testimonials</h2>

        <div className="testimonial-review">
          <div className="card">
            <img
              className="card-img"
              src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-1.jpg"
            ></img>
            <h2 className="testimonaial-name">Johan Doe</h2>
            <p className="testimonial-comments">
              “Lorem Ipsum is simply dummy text of the print book. It has
              survived not only five centuries, but also the leap”
            </p>
          </div>

          <div className="card">
            <img
              className="card-img"
              src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-4.jpg"
            ></img>
            <h2 className="testimonaial-name">Takar Bowa</h2>
            <p className="testimonial-comments">
              “Lorem Ipsum is simply dummy text of the print book. It has
              survived not only five centuries, but also the leap”
            </p>
          </div>

          <div className="card">
            <img
              className="card-img"
              src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-3.jpg"
            ></img>
            <h2 className="testimonaial-name">Jona Leoner</h2>
            <p className="testimonial-comments">
              “Lorem Ipsum is simply dummy text of the print book. It has
              survived not only five centuries, but also the leap”
            </p>
          </div>

          <div className="card">
            <img
              className="card-img"
              src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-2.jpg"
            ></img>
            <h2 className="testimonaial-name">Alex Saanu</h2>
            <p className="testimonial-comments">
              “Lorem Ipsum is simply dummy text of the print book. It has
              survived not only five centuries, but also the leap”
            </p>
          </div>
        </div>

        <div className="section-6">
              <div>
              <img className="footer-logo" src="./images/logo03.png" alt="Logo" />
              </div>

              <div className="information-section" >
            <h2 >INFORMATION</h2>
            <ul className="info-list">
                <li className="list-items" >Home</li>
                <li className="list-items" >Blog</li>
                <li>className="list-items" About Us</li>
                <li className="list-items" >Menu</li>
                <li className="list-items" >Contact Us</li>
            </ul>
          </div>

          <div className="topitems-container">
            <h2>TOP ITEMS</h2>
            <ul className="info-list">
                <li  className="list-items"  >Non Veg Supreme</li>
                <li  className="list-items" >English Retreat Pizza</li>
                <li  className="list-items" >Peri Peri Veg Pizza</li>
                <li  className="list-items" >italian pasta</li>
                <li  className="list-items" >Penne pasta</li>
            </ul>

          </div>

          <div className="other-container" >
            <h2>OTHERS</h2>
            <ul className="info-list" >
                <li className="list-items"  >Checkout</li>
            <li  className="list-items"  >Cart</li>
            <li   className="list-items"  >Product</li>
            <li   className="list-items" >Location</li>
            <li  className="list-items"  >Legal</li>
            </ul>
            
          </div>

          <div className="social-media-container">
            <h2>SOCIAL MEDIA</h2>
            <div className='socialmedia-icon'>
            <img className="social-media-logo" src='./images/facebook.png'></img>
            <img className="social-media-logo"  src='./images/pinterest.png'></img>
            <img  className="social-media-logo"  src='./images/twitter.png'></img>
            <img  className="social-media-logo"  src='./images/linkedin.png'></img>

            </div>
            <p>Signup and get exclusive offers and coupon codes</p>
            <button  className='login-btn sign-up-btn'>SIGN UP</button>
          </div>

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
  );
};

export default LogoutPage;
