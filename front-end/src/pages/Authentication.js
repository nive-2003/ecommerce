import "../css/Authentication.css"

import React, { useEffect, useState } from "react";
import { Link,useNavigate } from 'react-router-dom'
import ReactDOM from "react-dom";
import Swal from 'sweetalert2'

import loginasadmin from "../images/loginasadmin.jpg"
import "../css/Authentication.css";

function Authentication() {

  let navigate = useNavigate()
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
   

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === "user1");

    // Compare user info
    if (userData) {
      if (userData.password !== "pass1") {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="authsub">
          <input type="submit" className="authsub"/>
        </div>
      </form>
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if(isSubmitted== true)
    {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Admin Logged in successfully',
        showConfirmButton: false,
        timer: 1500
      })

      navigate("/home");
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }

  }
  
  return (
    
    <div className="app">
      <img src={loginasadmin} alt="admin" className="loginasadminpage"/>
      <div className="login-form1">
        <div className="title">Sign In As Admin</div>
        {
        isSubmitted ? 
        <div className="aaddd"> Admin is successfully logged in
           <button onClick={onSubmit} className="adminbutton">
                        <a>Login</a>
                    </button>
         </div>
          : renderForm}

        
      </div>

    </div>
  );
}

export default Authentication;