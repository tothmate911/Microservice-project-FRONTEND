import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const content = (
  <React.Fragment>
    <Button>
      <Link to="/login">
        <h6 className="open-sans">
          <i className="fas fa-sign-in-alt"></i> Sign In
        </h6>
      </Link>
    </Button>
  </React.Fragment>
);

function Login() {
  return content;
}

export default Login;
