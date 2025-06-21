import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { email, password } = inputValue;
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
    
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const { data } = await axios.post(
        "https://trading-platform-66r4.onrender.com/login",
        {
          ...inputValue,
        },
        { 
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      
      console.log("Login response:", data);
      
      if (data.success) {
        handleSuccess(data.message);
        // Force full reload to ensure cookies are processed
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        handleError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      let errorMessage = "An error occurred. Please try again.";
      
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = `Server error: ${error.response.status}`;
        }
      } else if (error.request) {
        errorMessage = "No response from server. Please check your connection.";
      }
      
      handleError(errorMessage);
    } finally {
      setIsSubmitting(false);
      setInputValue({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="form_container" style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2 className="text-center mb-4">Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
        <div className="mt-3 text-center">
          <span>
            Don't have an account? <a href="/signup" className="text-decoration-none">Sign up</a>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;