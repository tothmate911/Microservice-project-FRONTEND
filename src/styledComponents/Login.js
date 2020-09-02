import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  a:link,
  a:visited {
    color: black !important;
  }
  a:hover,
  a:focus,
  a:active {
    color: gray !important;
    text-decoration: none;
  }
`;

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
