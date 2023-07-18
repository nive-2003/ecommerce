import React from 'react'
import bg from "../images/bg.mp4"
import "./Signup.css"
import { useState } from "react";
import {  Link,useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function Signup() {

  const [username, setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile_Number, setMobileNumber] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
 
  const navigate = useNavigate();
  const handleUserName = (e) => {
    console.log(e);
    setUserName(e.target.value);
};

const handleEmail = (e) => {
      console.log(e);
      setEmail(e.target.value);
    };
    
    const handlePassword = (e) => {
      console.log(e);
  setPassword(e.target.value);
  };
    const handleConfirmPassword = (e) => {
      console.log(e);
  setConfirmPassword(e.target.value);
  };
    const handleMobileNumber = (e) => {
      console.log(e);
  setMobileNumber(e.target.value);
  };
 
 
  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(username,email,password,confirm_password,mobile_Number);
  if (username === "" ||password === ""||email===""||confirm_password===""||mobile_Number==="") 
  {
  toast.error("Enter all fields");
  } 
  else if(password!==confirm_password){
    toast.error("Confirm password and password doesn't match")
}
  else {
 
  axios.post("http://localhost:8080/savesignup",{
  username: username,
  email: email,
  password: password,
  confirm_password:confirm_password,
  mobile_Number:mobile_Number
  })
  .then((res) => {
  console.log(res.data);
  if(res.data==='signup successfull')
  {
      toast.success("signup successfull")
     setTimeout(()=>
     {
         navigate("/login");
     },2000); 
  }
 
  else if(res.data==='Email & Username already exist'){
    toast.error("Email & Username already exist");
   }
   else if(res.data===' Email already exist'){
   toast.error(" Email already exist");
    }
   else if(res.data===' Username already exist')
   {
     toast.error("Username already exist");
   }
  });
  }
  };
  return (
    <div className="tdx">
      <video src={bg} autoPlay muted loop className='video-bg'/>
    <div className='demologinbody'></div>
    <div class="login_form_container">
    <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />


      <div class="login_form">
        <div className='signupform'>
        <h2 className='text-center'>Sign Up</h2> 
        <div class="input_group1">
          <input
            onChange={handleUserName}
            type="text"
            placeholder="Username"
            className="input_text1"
            value={username}
            autocomplete="off"
            required
          />
        </div>
        <div class="input_group1">
        
          <input
            onChange={handleEmail}
            type="text"
            placeholder="Email"
            className="input_text2"
            autocomplete="off"
            required
          />
        </div>
       
        <div class="input_group1">
          <input
          onChange={handlePassword}
          value={password}
            type="password"
            placeholder="Password"
            className="input_text3"
            autocomplete="off"
            required
          />
        </div>
        <div class="input_group1">
          <input
          type="password"
          onChange={handleConfirmPassword}
          value={confirm_password}
            placeholder="Confirm Password"
            className="input_text4"
            autocomplete="off"
            required
          />
        </div>
        <div class="input_group1">
          <input
          onChange={handleMobileNumber}
          value={mobile_Number}
            type="text"
            placeholder="mobilenumber"
            className="input_text5"
            autocomplete="off"
            required
          />
        </div>
        
        
        <div onClick={handleSubmit} className="subsign">
          <a>Submit</a>
        </div>
        <br/>
        <h3 className="alreaady_exist">
  
        <div className='directtologin'><a href='/login'>Already a existing user?Login</a></div>
        <div className='or'>Or</div>
        <div className='loasadmin'><a href="/auth">Login As Admin</a></div>
    {/* Already an existing user ? <Link to="/login/loginbyusername" className="loginword" >Login</Link> */}
 
  </h3>
          
    </div>
    </div>
    </div>
    </div>
  )
}
