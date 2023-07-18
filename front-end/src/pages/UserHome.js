import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import homepg from "../images/homepg.jpg"
import "../css/LoginHome.css";
function UserHome() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

 

  return (
    <div className="hmain">
     
     <table class="table table-hover">
     <img src={homepg} className='loginhome' alt="logo"/>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pages to view</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Login Page</td>
            <td>
              <button onClick={() => handleNavigate("/userlogin")} className="hview">View</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cart Details Page</td>
            <td>
            <button onClick={() => handleNavigate("/usercart")} className="cview">View</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>User Details Page</td>
            <td>
            <button onClick={() => handleNavigate("/userdetails")} className="cview">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserHome;
