import React from "react";

function Navbar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#fff"}}>
        <div class="container p-2">
          <a class="navbar-brand" href="#k">
            <img src="media/images/logo.svg" style={{width:"25%"}} alt=""/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
            <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#c">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#v">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#b">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#a">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#l">
                  Support
                </a>
              </li>
             
            </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
