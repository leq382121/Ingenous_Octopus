import React, { useState } from "react";
import { Input } from '../Partials/Input'
import { Button } from '../Partials/Button'

import "./Login.css";
import logo from "../../images/logo.svg";

export const Login = ({initiateLogIn}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorEmail('');
    setErrorPass('');

    (email === "TEST" && pass === "TEST") 
      ? initiateLogIn()
      : email === "TEST" 
        ? setErrorPass("Password incorrect")
        : setErrorEmail('Email not found') 
  }

  return (
    <div className="Login">
      <div className="Login_modal">
        <img className="logo" src={logo}/>
        <h1 className="title">Log in</h1>
        <p className="subtitle">Enter your details below</p>
        
        <form onSubmit={handleSubmit}>
          <Input
            labelText="Email"
            inputType="Text"
            inputValueHandler={(value) => setEmail(value)}
            error={errorEmail}
          />

          <Input
            labelText="Password"
            inputType="password"
            inputValueHandler={(value) => setPass(value)}
            error={errorPass}
          />

          <Button
            buttonType="submit"
            buttonText="Log in"
            primary={true}
          />
        </form>
      </div>
    </div>
  );
};
