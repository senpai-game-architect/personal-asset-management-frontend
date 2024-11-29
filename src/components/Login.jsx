import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/login.css";
import mail from './images/mail.png';
import loginimage from './images/loginimage.webp';
import padlock from './images/padlock.png';
import facebook from './images/facebook.png';
import google from './images/google.png';
import instagram from './images/instagram.png';

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // Handle successful login
      setMessage("Login successful!");
      console.log(response.data);

      // Redirect or store token if necessary
      localStorage.setItem("token", response.data.token); // Store token for authenticated routes
    } catch (error) {
      // Handle error
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login">
      {/* Left Section */}
      <div>
        <img className="mainimage" alt="login images" src={loginimage} />
      </div>

      {/* Social Login Section */}
      <div>
        <div className="social-container">
          <p>Sign in with</p>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <img className="social" alt="social media" src={google} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img className="social" alt="social media" src={facebook} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img className="social" alt="social media" src={instagram} />
          </a>
          <div className="option">
            <hr className="hr" />
            <p className="p">or</p>
            <hr />
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="email">
            <img className="email" alt="email" src={mail} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="pass">
            <img className="pass" alt="password" src={padlock} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <a href="#">
            <p>Forgot password?</p>
          </a>
          <div className="loginbutton">
            <button type="submit">Login</button>
          </div>
        </form>

        {/* Login Message */}
        {message && <p>{message}</p>}

        {/* Register Link */}
        <p className="register">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
