import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { loginUser, registerUser } from "../actions/UserAction";
import { registerUserReducer } from "../reducers/UserReducer";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
const RegisterScreen = ({ showRegistrationModal, setShowRegistrationModal }) => {
  const [isRegisterForm, setIsRegisterForm] = useState(true);
  const [name, setNAme] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState(""); // Separate login password
  const registerState = useSelector(state=> state.registerUserReducer)
  const {error, loading, success} = registerState;
  const loginstate = useSelector(state=>state.loginUserReducer)
  const {loginloading, loginerror} = loginstate;

  useEffect(()=>{
    if(localStorage.getItem('currentUser')) {
      window.location.href='/Homepage'
    }
  })

  const dispatch = useDispatch();

  function login() {
    const user = {
      email: loginEmail,
      password: loginPassword
    };
  
    // You should send a request to your server to verify the user's credentials here.
    // If the server returns a success response, you can proceed with the login.
  
    dispatch(loginUser(user));
  }
  
  function register() {
    if (password !== cpassword) {
      alert("Password not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  const toggleForm = () => {
    setIsRegisterForm(!isRegisterForm);
  };

  const hideModal = () => {
    setShowRegistrationModal(false);
    document.body.style.overflow = "auto";
  };

  return (


    <div className={`Modal ${showRegistrationModal ? "showModal" : "hideModal"}`}>
      <div className="login-box">
      <button className="register-back-btn" onClick={hideModal}>
  <img src="https://www.burgerking.in/static/media/left-arrow.e2f47880.svg" alt="Back" />
</button>
            {loading && (<Loading/>)}
        {success && (<Success  success="User Registered Successfully"/> )}
        {error && (<Error error= "Email already registered"/>)}

        {loginloading && (<Loading/>)}
        {loginerror && (<Error error="Invalid Credentials"/>)}
        <img className="login-logo register-logo" src="./images/logo03.png" alt="Logo" />

        <div className="login-heading">
      
          <p className="register-heading">{isRegisterForm ? "Register" : "Login"}</p>
         
        </div>

        {isRegisterForm ? (
          <>
           <div className="number-input">
              <input
                type="text"
                className="input-number-field"
                placeholder="Enter Useername"
                required
                value={name}
                onChange={(e)=> {setNAme(e.target.value)}}
              />
            </div>
            <div className="number-input">
              <input
                type="email"
                className="input-number-field"
                placeholder="Enter Email Address"
                required
                value={email}
                onChange={(e)=> {setEmail(e.target.value)} }
              />
            </div>
            <div className="number-input email-field">
              <input
                type="password"
                className="input-number-field email"
                placeholder="Enter Password"
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <div className="number-input email-field">
              <input
                type="password"
                className="input-number-field email"
                placeholder="Confirm Password*"
                required
                value={cpassword}
                onChange={(e)=>setcPassword(e.target.value)}
              />
            </div>
          </>
        ) : (
          <>
         
            <div className="number-input">
              <input
                type="email"
                className="input-number-field"
                placeholder="Enter Email Address (Login)"
                required
                value={loginEmail}
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
            </div>
            <div className="number-input email-field">
              <input
                type="password"
                className="input-number-field email"
                placeholder="Enter Password (Login)"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            
          </>
        )}

        <button className="login-btn login"  onClick={isRegisterForm ? register : login} >
        {isRegisterForm ? "Register" : "Login"}
        
        </button>
        <p className="or-text">OR</p>
        <div className="login-google-facebook">
            <div className="google-btn-container">
              <img
                className="google-img"
                src="data:image/png;base64,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"
              ></img>
              <button className="google-btn">Google</button>
            </div>
            <div className="github-btn-container">
            
              <img
                className="github-img"
               
                src="../images/Github.png"
              ></img>
              <button className="github-btn">Github</button>
            </div>
          </div>
          <div className="registration-field">
        <p style={{cursor: "pointer"}} onClick={toggleForm}>Click Here To {isRegisterForm ? "Login" : "Register"}</p>
        </div>
        <footer className="login-footer">
          <div className="footer-container">
            <p className="footer-para">
              By continuing, you agree to our Terms & Conditions, Privacy Policy, and Promotional T&C
            </p>
          </div>
        </footer>
        </div>
        
      </div>
   
  );
};

export default RegisterScreen;
