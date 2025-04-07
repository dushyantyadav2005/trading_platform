import React from 'react'


function CreateTicket() {
    return (  <div className="container">
        <div className="row p-5">
          <h1 className="fs-5 text-muted mb-5">
          To create a ticket, select a relevant topic
          </h1>
          </div>
          <div className='row ' style={{paddingLeft:"75px"}}>
        <div className="col ">
          <p>Company</p>
          <p className="mb-2">
            <a
              href="f"
              style={{ textDecoration: "none" }}
             
            >
            Resident individual
            </a>
          </p>
          <p className="mb-2">
            <a
              href="l"
              style={{ textDecoration: "none" }}
             
            >
              {" "}
              Minor
            </a>
          </p>
          <p className="mb-2">
            <a
              href="l"
              style={{ textDecoration: "none" }}
            //   className="text-muted"
            >
              Non Resident Indian (NRI)
            </a>
          </p>
          <p className="mb-2">
            <a
              href="l"
              style={{ textDecoration: "none" }}
            //   className="text-muted"
            >
Company, Partnership, HUF and LLP            </a>
          </p>
          <p className="mb-2">
            {" "}
            <a
              href="l"
              style={{ textDecoration: "none" }}
            //   className="text-muted"
            >
            Glossary

            </a>
</p>
        </div>
        <div className="col">
          <p>Support</p>
          <p className="mb-2">
            <a
              href="f"
              style={{ textDecoration: "none" }}
            //   className="text-muted"
            >
              Contact us
            </a>
          </p>
          <p className="mb-2">
            <a
              href="l"
              style={{ textDecoration: "none" }}
            //   className="text-muted"
            >
              {" "}
              Support portal
            </a>
          </p>
          <p className="mb-2">
            <a
              href="l"
              style={{ textDecoration: "none" }}
            //   className="text-muted"
            >
              Z-Connect blog
            </a>
          </p>
          <p className="mb-2">
            <a
              href="l"
              style={{ textDecoration: "none" }}
            //   className="text-muted"
            >
              List of charges
            </a>
          </p>
          <p className="mb-2">
            {" "}
            <a
              href="l"
              style={{ textDecoration: "none" }}
            //   className="text-muted"
            >
              Downloads & resources
            </a>
          </p>
         
        </div>
        <div className="col">
          <p>Account</p>
          <p className="mb-2">
            <a
              href="l"
              style={{ textDecoration: "none" }}
            //   className="text-muted"
            >
              {" "}
              Open an account
            </a>
          </p>
          <p className="mb-2">
            <a
              href="l"
              style={{ textDecoration: "none" }}
            //   className="text-muted"
            >
              Z-Connect blog
            </a>
          </p>
          <p className="mb-2">
            {" "}
            <a
              href="l"
              style={{ textDecoration: "none" }}
            //   className="text-muted"
            >
              Fund transfer
            </a>
          </p>
        </div>
      </div>
        </div> );
}

export default CreateTicket;