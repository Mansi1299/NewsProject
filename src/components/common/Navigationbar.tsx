import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
// import img from "../assest/header-banner.jpg";

// import styled from "styled-components";


function Navigationbar() {
 
  return (
    <>
      <div>
        
      </div>
      <div className="body">
        <div className="container2">
          <Link className="link" to="/" style={{ fontSize: "40px" }}>
            News A<span style={{ color: "red", fontSize: "40px" }}>pp</span>
          </Link>
          <Link style={{ float:'right' }}  className="link" to="/education">
            Education
          </Link>
          <Link style={{ float:'right' }} className="link" to="/general">
            General
          </Link>
          <Link style={{ float:'right' }} className="link" to="/sports">
            Sports
          </Link>
          <Link style={{ float:'right' }} className="link" to="/health">
            Health
          </Link>
          <Link style={{ float:'right' }} className="link" to="/social">
            Social
          </Link>
          <Link style={{ float:'right' }} className="link" to="/business">
            Business
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default Navigationbar;
