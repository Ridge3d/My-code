import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <nav
          className="navbar navbar-expand-xl navbar-light bg-info text-white"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand font-weight-bold text-white text-uppercase">
              Jacey's Personal Blog
            </a>
            <div className="navbar" id="navbarResponsive">
              <ul className="navbar-nav ml-auto text-uppercase font-weight-bold text-white">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/post">
                    Post
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBar;
