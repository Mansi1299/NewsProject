import axios from "axios";
import "../css/LoginForm.css";
import toast from "react-hot-toast";
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import React, { FunctionComponent, MouseEvent } from "react";
const API_URL = "https://reqres.in/api";

const validateEmail = (mail: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  toast.error("You have entered an invalid email address!nbmb");
  return false;
};
const validatePassword = (password: string) => {
  if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
    toast.success("pass");
    return true;
  }
  return false;
};
const SignupForm: FunctionComponent = () => {
  const [SignupFormData, setSignupFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSignupFormData({
      ...SignupFormData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const handleOnFormSubmit = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const reqData = {
      email: SignupFormData?.email,
      password: SignupFormData?.password,
    };

    if (reqData.email !== "" && reqData.password !== "") {
      validateEmail(reqData.email);
      validatePassword(reqData.password);

      try {
        const resData = await axios.post(`${API_URL}/Register`, reqData);

        if (resData.status === 200) {
          localStorage.setItem("token", resData.data.token);
          toast.success('Successfully toasted!')
          navigate("/login");
        } else {
          localStorage.setItem("token", "");
          toast.error("something went wrong.");
        }
      } catch (e) {
        console.log(e);
        toast.error("Form submited with error");
        localStorage.setItem("token", "");
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
            <h1>Signup </h1>
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
            <Link to="/login">Already Have an Account?</Link>
            <button  onClick={handleOnFormSubmit}>Sign In</button>
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

export default SignupForm;