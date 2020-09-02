import React from "react";
import Logo from "../styledComponents/Logo";
import Login from "../styledComponents/Login";
import { Link, useHistory } from "react-router-dom";
import Button from "../styledComponents/Button";

function Header() {
  let history = useHistory();

  const login = (
    <Link className="nav-link" to="/login">
      <Login />
    </Link>
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    history.push("/");
  };

  const user = (
    <Button>
      <div className="row">
        <div className="col">
          <Link className="nav-link" to="/user">
            {localStorage.getItem("username")}
          </Link>
        </div>
        <div className="col">
          <Link to="/" onClick={logout}>
            <h5 className="mt-2">
              <i class="fas fa-power-off"></i>
            </h5>
          </Link>
        </div>
      </div>
    </Button>
  );

  let auth = localStorage.getItem("username") === null ? login : user;

  const content = (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-white shadow">
        <div className="w-100">
          <div className="row w-100">
            <div className="col"></div>
            <Logo />
            <div className="d-flex justify-content-end col w-100">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse p-2"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                  <li className="nav-item">{auth}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );

  return content;
}

export default Header;
