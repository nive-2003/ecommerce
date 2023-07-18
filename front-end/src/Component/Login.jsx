import React from 'react'
 import "./Login.css";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import login from "../images/loginpage.jpg"
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {


  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
 
  const navigate = useNavigate();
  
  const handleUserName = (e) => {
  setUserName(e.target.value);
  };
 
  const handlePassword = (e) => {
  setPassword(e.target.value);
  };
 
 
  const handleSubmit = (e) => {
  e.preventDefault();
  if (username === "" ||password === "") 
  {
  toast.error("Enter all fields");
  } 
  else{ 
  axios.get(`http://localhost:8080/loginbyusername/${username}/${password}`)
  .then((res) => {
  console.log(res.data);
  if(res.data==="login sucessfully")
  {
      toast.success(res.data);
     setTimeout(()=>
     {
         navigate("/homefeatures");
     },2000)
     
  }
  else
  {
  toast.error("login failed");
   }
  });
  }
  };
  return (
    <div className='demologinbody'>
      <img src={login} alt='login' className='background'/>
    <div class="login_form_container1">
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
      <div class="login_form1">
      <h2 className='text-center1'>Login</h2> 
        <div class="input_group1">
          <input
            onChange={handleUserName}
            type="text"
            placeholder="Username"
            class="inuser"
            autocomplete="off"
            required
          />
        </div>
        <div className="input_group">
          <input
          onChange={handlePassword}
          value={password}
            type="password"
            placeholder="Password"
            class="inpuser1"
            autocomplete="off"
            required
          />
        </div>
        <div onClick={handleSubmit} className="button_group">
        <button className='logsign'>Submit</button></div>
        <div className='directtohome'><a href='/'>Don't have an account?SignUp</a></div>
        
      </div>
    </div>
    </div>
  )
}