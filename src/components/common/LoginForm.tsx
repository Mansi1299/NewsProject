import "../css/LoginForm.css";
import styled from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = "https://reqres.in/api";

const validateEmail = (mail: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  toast.error("You have entered an invalid email address!");
  return false;
};
const validatePassword = (password: string) => {
  if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
    return true;
  }
  return false;
};

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLoginFormData({
      ...loginFormData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleOnFormSubmit = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const reqData = {
      email: loginFormData?.email,
      password: loginFormData?.password,
    };

    if (reqData.email !== "" && reqData.password !== "") {
      validateEmail(reqData.email);
      validatePassword(reqData.password);

      try {
        const resData = await axios.post(`${API_URL}/login`, reqData);
        if (resData.status === 200) {
          localStorage.setItem("token", resData.data.token);
          toast.success("you are successfully logged in.");
          navigate("/homepage");
        } else {
          localStorage.setItem("token", "");
          toast.error("something went wrong.");
        }
      } catch (e) {
        toast.error("Form submited with error");
      }
    } else {
      toast.error("Email and Password should not be empty.");
    }
  };
  return (
    <>
      <div className="me">
        <div className="container" id="container">
          <div className="form-container log-in-container">
            <form action="#">
              <h1>Login</h1>
              <div className="social-container">
                <Link to="https://www.facebook.com/" className="social">
                  <i className="fa fa-facebook fa-2x"></i>
                </Link>
                <Link to="https://twitter.com/" className="social">
                  <i className="fab fa fa-twitter fa-2x"></i>
                </Link>
              </div>
              <span>or use your account</span>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleOnInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleOnInputChange}
              />
              <Link to="/signup">Don't Have Account??</Link>
              <button onClick={handleOnFormSubmit}>Log In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>News Website</h1>
                <p>
                  Let's Explore Our Knowledge,Celebrating good news reminds you
                  that there's still hope — and the end of the story isn't here
                  yet .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
