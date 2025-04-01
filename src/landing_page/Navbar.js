import { React, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }
      
      try {
        const { data } = await axios.post(
          "http://localhost:3002",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) {
          setUsername(user);
          setIsAuthenticated(true);
          toast(`Welcome back, ${user}`, { 
            position: "top-right",
            className: 'toast-success'
          });
        } else {
          throw new Error("Invalid token");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        removeCookie("token");
        setIsAuthenticated(false);
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };
    verifyCookie();
  }, [cookies.token, navigate, removeCookie]);

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    setIsAuthenticated(false);
    navigate("/");
    toast.success("Logged out successfully", { position: "top-right" });
  };

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