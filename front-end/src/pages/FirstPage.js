import React, { useEffect, useState } from "react";
import { Link,useNavigate } from 'react-router-dom'
import ReactDOM from "react-dom";
import Home from "./Home";
import loginpg from "../images/loginpage.jpg"
import "../css/FirstPage.css";

function FirstPage() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
   

 
  return (
    <div className="firstpagemain">
    <div className="app">
       <img src={loginpg} alt="loginpage" className="lp"/> 
      <div className="login-form">
        <div className="title">Sign In As User</div>
        {/* {isSubmitted ? <div> <div>User is successfully logged in</div> <Link to="/userhome"><button className="login">login</button></Link> </div>: renderForm} */}
    <div className="form">
      <form >
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
         
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          
        </div>
        <div className="button-container">
         <Link to="/homefeatures"> <input type="submit" /></Link>
        </div>
      </form>
       <Link to="/auth" > <button className="loginasadmin">Login as Admin</button></Link>
      </div>
    </div>
      
        
          {/* <Link to="/homefeatures"><button>Submit</button></Link> */}
          </div>
    </div>
  );
}

export default FirstPage;