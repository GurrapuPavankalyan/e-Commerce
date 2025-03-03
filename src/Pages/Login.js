import React, { useState, useRef } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';
import checkValidateData from '../Utils/checkValidateData';
import {addUser} from '../Utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import checkSignInValidateData from '../Utils/checkSignInValidData';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const mobileNumber = useRef(null);
  const username = useRef(null);

  const handleButtonClick = () => {
    // Validate Login Form

    if(!isSignInForm){
      const message = checkValidateData(email.current?.value || "", password.current?.value || "", mobileNumber.current?.value || "", username.current?.value || "");
      setErrorMessage(message);
      console.log(setErrorMessage);

      if(message){
        return;
      }else{
        setErrorMessage(!errorMessage);
      }
    }else{
      const signInMessage = checkSignInValidateData(email.current?.value || "", password.current?.value || "");
      setErrorMessage(signInMessage);

      if(signInMessage) return;
    }
    

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
      .then((userCredential) => {
        // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: username.current?.value,
      }).then(() => {
        // Profile updated!
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, mobileNumber: mobileNumber.current?.value }));
        navigate("/home");
      }).catch((error) => {
        // An error occurred
        setErrorMessage(error.message);
      });
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
      });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
      .then((userCredential) => {
      // Signed in 
      //const user = userCredential.user;  
      const { uid, email, displayName } = auth.currentUser;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      navigate("/home");
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
      });

    }  
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  console.log(errorMessage);

  return (
    <div className='login-container'>
        <form onSubmit={(e) => e.preventDefault()} className='login-form'>
          <h1 className='form-title'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && 
            <div className='signup-details'>
              <h2>Create Account</h2>
              <label>Your name</label>
              <input type='text' ref={username} placeholder='first and last name' className='form-input' />
              <label>Mobile number</label>
              <input type='number' ref={mobileNumber} placeholder='Mobile number' className='form-input' />
            </div>           
          }
          <label>Email</label>
          <input type='text' ref={email} placeholder='Email Address'  className='form-input' />
          <label>Password</label>
          <input type='password' ref={password} placeholder='Atleast 6 characters' className='form-input' /><br/>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button onClick={handleButtonClick} className='form-button'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleSignInForm} className='toggle-form'>
            {isSignInForm ? "New to eCommerce? Sign Up Now" : "Already registered? Sign In Now..."}
          </p>
        </form>
    </div>
  )
};

export default Login;