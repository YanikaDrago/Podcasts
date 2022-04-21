import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

import FormInput from "../form-input/FormInput.component";
import Button from '../button/Button.component';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./admin-login.styles.css"

const AdminLogin = () => {
  
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    auth: false
  });

  // const dispatch = useDispatch();

  const { email, password } = userData;
  

  const handleSubmit = event => {
    event.preventDefault();
    let emails = ["yanadragomir@mail.ru", "oh.eldarkaa@gmail.com"];
    let pass = "dragomir2409";

    if (emails.includes(email) && password === pass){
      setUserData(userData => ({...userData, auth: true}));
    } else {
      setUserData(userData => ({ ...userData, auth: false}));
      alert("Вы не админ!");
      return;
    }

    setUserData(userData => ({...userData, email: '', password: '' }));
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserData(userData => ({...userData, [name]: value }));
  };


  
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>

            <FormInput
              name='email'
              type='email'
              handleChange={handleChange}
              value={email}
              label='email'
              required
            />

            <FormInput
              name='password'
              type='password'
              value={password}
              handleChange={handleChange}
              label='password'
              // autoComplete='true'
              required
            />

          <div className='buttons'>
            <Button type='submit' buttonStyle="button-option"> Sign in </Button>
            {
              userData.auth ? <Navigate replace to="/admin/podcast" /> : null
            }
          </div>
        </form>
      </div>
    );
}

export default AdminLogin;

// userData.auth ? console.log("wow") : null
// <Navigate replace to="/admin/podcast" />