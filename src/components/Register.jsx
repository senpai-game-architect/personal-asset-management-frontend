import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/login.css";
import mail from "./images/mail.png";
import loginimage from "./images/loginimage.webp";
import padlock from "./images/padlock.png";
import user from "./images/user.png";
import confpass from "./images/confpass.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="login">
      {/* Left Section */}
      <div>
        <img className="mainimage" alt="register illustration" src={loginimage} />
      </div>

      {/* Right Section */}
      <div>
        <div className="form" onSubmit={handleSubmit}>
          <div className="email">
            <img className="email" alt="email icon" src={user} />
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <img className="email" alt="name icon" src={mail} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="pass">
            <img className="pass" alt="password icon" src={padlock} />
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="pass">
            <img className="pass" alt="password icon" src={confpass} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="loginbutton">
            <button type="submit">Register</button>
          </div>

          {message && <p>{message}</p>}

          {/* Login Link */}
          <p className="register">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
