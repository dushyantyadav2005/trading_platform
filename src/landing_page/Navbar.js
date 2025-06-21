import { React, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const url = "https://dashboard-trading-platform-1.onrender.com";
  
  // Check authentication status
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const { data } = await axios.post(
          "https://trading-platform-66r4.onrender.com/verify",
          {},
          { 
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' }
          }
        );
        
        if (data.status) {
          setUsername(data.user);
          setIsAuthenticated(true);
          // Save to localStorage for state persistence
          localStorage.setItem("authState", JSON.stringify({
            isAuthenticated: true,
            username: data.user
          }));
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("authState");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
        localStorage.removeItem("authState");
      } finally {
        setIsLoading(false);
      }
    };

    // Check localStorage for existing auth state
    const savedAuthState = localStorage.getItem("authState");
    if (savedAuthState) {
      const { isAuthenticated: savedAuth, username: savedUsername } = JSON.parse(savedAuthState);
      setIsAuthenticated(savedAuth);
      setUsername(savedUsername);
      setIsLoading(false);
    } else {
      verifyAuth();
    }
    
    // Listen for storage events (cross-tab sync)
    const handleStorageChange = (e) => {
      if (e.key === "authState") {
        if (e.newValue) {
          const { isAuthenticated: newAuth, username: newUser } = JSON.parse(e.newValue);
          setIsAuthenticated(newAuth);
          setUsername(newUser);
        } else {
          setIsAuthenticated(false);
          setUsername("");
        }
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      // Call backend logout
      await axios.post(
        "https://trading-platform-66r4.onrender.com/logout",
        {},
        { withCredentials: true }
      );
      
      // Clear cookie with proper domain
      const domain = window.location.hostname.includes('onrender.com') 
        ? '.onrender.com' 
        : 'localhost';
      
      removeCookie("token", { 
        path: "/",
        domain: domain
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
    
    // Update state and clear localStorage
    setIsAuthenticated(false);
    setUsername("");
    localStorage.removeItem("authState");
    
    // Broadcast logout to other tabs
    window.localStorage.setItem("logout", Date.now().toString());
    
    navigate("/login");
    toast.success("Logged out successfully", { position: "top-right" });
  };

  // Handle cross-tab logout
  useEffect(() => {
    const handleLogoutEvent = (e) => {
      if (e.key === "logout") {
        setIsAuthenticated(false);
        setUsername("");
        localStorage.removeItem("authState");
        navigate("/login");
      }
    };
    
    window.addEventListener("storage", handleLogoutEvent);
    
    return () => {
      window.removeEventListener("storage", handleLogoutEvent);
    };
  }, [navigate]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  if (isLoading) {
    return <div className="navbar-placeholder">Loading...</div>;
  }

  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img 
              src="media/images/logo.svg" 
              style={{ height: "40px" }} 
              alt="Logo" 
              className="d-inline-block align-top"
            />
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">Support</Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              {!isAuthenticated ? (
                <>
                  <Link className="btn btn-outline-primary me-2" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-primary" to="/signup">
                    Sign Up
                  </Link>
                </>
              ) : (
                <div className="dropdown">
                  <button 
                    className="btn btn-light dropdown-toggle d-flex align-items-center"
                    onClick={toggleDropdown}
                    aria-expanded={showDropdown}
                  >
                    <div className="me-2">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <span className="d-none d-md-inline">{username}</span>
                  </button>
                  
                  {showDropdown && (
                    <div className="dropdown-menu dropdown-menu-end show" style={{ 
                      position: 'absolute', 
                      inset: '0px auto auto 0px', 
                      margin: '0px', 
                      transform: 'translate(0px, 40px)'
                    }}>
                      <Link className="dropdown-item" to="/profile">
                        <i className="bi bi-person me-2"></i>Profile
                      </Link>
                      <a className="dropdown-item" href={url}>
                        <i className="bi bi-speedometer2 me-2"></i>Dashboard
                      </a>
                      <Link className="dropdown-item" to="/settings">
                        <i className="bi bi-gear me-2"></i>Settings
                      </Link>
                      <div className="dropdown-divider"></div>
                      <button 
                        className="dropdown-item text-danger" 
                        onClick={handleLogout}
                      >
                        <i className="bi bi-box-arrow-right me-2"></i>Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Navbar;