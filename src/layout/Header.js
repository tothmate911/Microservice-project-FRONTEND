import React from "react";
import Logo from "../styledComponents/Logo";
import Login from "../styledComponents/Login";
import { Link } from "react-router-dom";

const content = (
  <React.Fragment>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="w-100">
        <div className="row w-100">
          <div className="col"></div>
          <Logo />
          <div className="d-flex justify-content-end col w-100">
            <div className="p-2">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                class="collapse navbar-collapse p-2"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                  <li class="nav-item">
                    <Link class="nav-link" to="#">
                      <Login />
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="#"></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </React.Fragment>
);

function Header() {
  return content;
}

export default Header;
