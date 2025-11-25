import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ dark, toggleMode }) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: dark ? "#222" : "#eaeaea",
        padding: "10px",
      }}
    >
      <Link className="navbar-brand" to="/" style={{ fontWeight: "bold" }}>
        Psk Technologies
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/form">
              Form
            </Link>
          </li>
        </ul>
        <button
          onClick={toggleMode}
          className="btn btn-sm"
          style={{
            backgroundColor: dark ? "white" : "black",
            color: dark ? "black" : "white",
            borderRadius: "10px",
            padding: "6px 18px",
          }}
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
