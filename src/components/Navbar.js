// to get react function based component code, just  type rf and hit tab, it's the magic of ES7+ React/Redux/React-Native snippets
import React, { useState } from "react";
//impt for importing proptypes
import PropTypes from "prop-types";
// import Custom_mode from "./custom_mode";

export default function Navbar(props) {
  //   function capitalize(word) {
  //     return word[0].toUpperCase() + word.substring(1).toLowerCase();
  //   }

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.aboutText}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault "
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "dark" ? "light" : "dark"
                } htmlFor="flexSwitchCheckDefault"`}
              >
                {props.mode} mode is here
                {/* {capitalize(props.mode)==='Light'?'Dark':'Light'} */}
              </label>
            </div>

            <div className="form-check form-switch ">
      <input
        style={{ backgroundColor: "black" }}
        className="form-check-input"
        type="color"
        id="colorPicker"
        onChange={props.functionToChangeTheCustomMode}
      />
      <label
        className={`form-check-label text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
        htmlFor="colorPicker"
      >
        Custom mode
        {/* {capitalize(props.mode)==='Light'?'Dark':'Light'} */}
      </label>
    </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "title one here",
  aboutText: "aboutText one here",
};
