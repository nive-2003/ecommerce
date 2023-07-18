import React from "react";
import butterflu from "../images/butterflu-logo.png"
import "../css/LoginHome.css"
import "./Navbar.css"
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={butterflu} className="logo" alt="logo" />
          <a className="navbar-brand" href="/" rel="navbar">
            MaxQu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/userhome">
                  <button className="ho">Home</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/adduser">
                  <button className="bu">+Add Yourself as user</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/cartadd">
                  <button className="bu">+Add items to your cart</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/detailsadd">
                 <button className="bu">+Add your details</button>
                </a>
              </li>
             
              
              
            </ul>
          
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
