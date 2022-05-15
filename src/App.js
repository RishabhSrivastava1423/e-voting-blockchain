import "regenerator-runtime/runtime";
import React from "react";
import { login, logout } from "./utils";

import navImg from "./assets/navImg.png";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Poll from "./components/Poll.js";
import PollingStation from "./components/PollingStation.js";


import "./global.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import getConfig from "./config";
import { async } from "regenerator-runtime/runtime";

const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {

  const changeCandidateFunction = async (prompt)=>{
    let namePair = await window.contract.getCandidatePair({prompt:prompt});
    localStorage.setItem("Candidate1", namePair[0]);
    localStorage.setItem("Candidate2", namePair[1]);
    localStorage.setItem("prompt",prompt);

    window.location.replace(window.location.href+"pollingStation")
  }

  return (
    <div className="background">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={navImg}
                alt=""
                width="70"
                height="24"
                className="d-inline-block align-text-top"
              />
              &nbsp; E voting
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
              
              {(window.accountId === "rishabhsrivastava.testnet")?<span className="navbar-text">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to="/poll"
                >
                  New Poll
                </Link>
              </span>:null}
              <span className="navbar-text">
                <a
                  className="nav-link active "
                  aria-current="page"
                  onClick={window.accountId === "" ? login : logout}
                >
                  {window.accountId === "" ? "Login" : window.accountId}
                </a>
              </span>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home  changeCandidates={changeCandidateFunction}/>} />
            
          <Route exact path="/about" element={<About />} />
            
          <Route exact path="/pollingStation" element={<PollingStation />}/>

          <Route exact path="/poll" element={<Poll />} />
            
        </Routes>
      </Router>
    </div>
  );
}
