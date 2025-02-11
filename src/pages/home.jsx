import React from "react";

const Lymi = () => {
  return (
    <>
      <header>
        <img style={{ height: "50px" }} src="xtxt logo.png" alt="" />
        Lymi
      </header>
      <div className="heropage">
        <div className="subtext">Meet Lymi Agent Today</div>
        <div className="maintext">
          An AI-powered assistant designed to simplify, automate, and optimize
          tasks on Solana effortlessly
        </div>
        <div className="finetext">
          Gain deep insights, streamline complex workflows, and execute
          automated strategies with precision. Experience a new level of
          efficiency in the Solana ecosystem today.
        </div>
        <button>Lymi Beta</button>
        <img className="heropage__img" src="/Lyme PNG NEW.png" alt="" />
      </div>

      <div className="heropage page2">
        <div className="subtext">How it works</div>
        <div className="maintext">Seamless Ecosystem Connectivity</div>
        <div className="finetext">
          Effortlessly interact with Solana’s protocols and services. Our
          AI-powered engine enables smart automation and smooth collaboration,
          creating a unified digital experience.
        </div>

        <div className="logos">
          <div className="logo logo-1">
            <img
              src="6c4dd3_2be9b4f674b54458b18fceb44012b16a~mv2.avif"
              alt=""
            />
          </div>
          <div className="logo logo-2">
            <img
              src="6c4dd3_12a5d7ea3c474a3eb4c9ae2138cbbd24~mv2.avif"
              alt=""
            />
          </div>
          <div className="logo logo-3">
            <img
              src="6c4dd3_84c0e8f331614b12b5a924340326e2c6~mv2.avif"
              alt=""
            />
          </div>
          <div className="logo logo-4">
            <img
              src="6c4dd3_1578a6b4a9c647cf82b27713e9c9a55b~mv2.avif"
              alt=""
            />
          </div>
          <div className="logo logo-5">
            <img
              src="6c4dd3_d66309557b33431dae4fe4472121f775~mv2.avif"
              alt=""
            />
          </div>
        </div>

        <img
          style={{ marginTop: "240px" }}
          className="heropage__img"
          src="/screen 2.png"
          alt=""
        />

        <div className="logos cards">
          <div className="card card-1">
            <img src="/Artboard 1 copy 2.png" alt="" />
            <p className="subtext">Unified Web3 Experience</p>
          </div>
          <div className="card card-2">
            {" "}
            <img src="/Artboard 1 copy.png" alt="" />
            <p className="subtext"> Advanced Market Insights</p>
          </div>
          <div className="card card-3">
            {" "}
            <img src="/Artboard 1.png" alt="" />
            <p className="subtext"> Intelligent Asset Management</p>
          </div>
        </div>

        <div className="finetext">
          Lymi analyzes blockchain data in real-time, helping users make
          informed decisions, manage assets, and track market trends within the
          Solana ecosystem.
        </div>
      </div>

      <div className="heropage page2 page3">
        <img src="/Artboard 1 copy 6.png" alt="" />

        <div className=" subtext-2 subtext">
          Join the Lymi Beta Program and be among the first to experience
          AI-driven blockchain insights, asset management, and Web3 automation
          by signing up for our exclusive beta whitelist.
        </div>

        <div className="signup">
          <div>
            <label htmlFor="signup">Enter your email here*</label>
            <input type="text" />
          </div>
          <button>Join Beta</button>
        </div>
      </div>
    </>
  );
};

export default Lymi;
