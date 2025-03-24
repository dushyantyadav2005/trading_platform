import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  lign-center mt-5 mb-5">
        <h1 className="fs-2 text-muted text-center ">People</h1>
      </div>
      <div className=" row  p-5" >
        <div className="col-6 text-center">
          <img className="" src="./media/images/nithinKamath.jpg" alt="" style={{borderRadius:"100%",width:"50%"}}/>
          <h5 className="text-muted mt-5">
          Nithin Kamath
          </h5>
          <h6 className="text-muted ">
          Founder, CEO
          </h6>
        </div>
        <div className=" col-6 ">
          <p className="  text-muted ">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="text-muted ">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-muted ">Playing basketball is his zen.</p>
          <p className="text-muted ">
            Connect on{" "}
            <a href="aal" alt="k">
              Homepage
            </a>{" "}
            /{" "}
            <a href="aal" alt="k">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="aal" alt="k">
              Twitter
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
