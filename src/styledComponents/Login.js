import React from "react";
import { Link } from "react-router-dom";

const content = (
  <React.Fragment>
    <Link to="/login">
      <h6 className="open-sans">
        <i className="fas fa-sign-in-alt"></i> Sign In
      </h6>
    </Link>
  </React.Fragment>
);

function Login() {
  return content;
}

export default Login;
