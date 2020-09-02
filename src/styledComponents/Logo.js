import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeButton = styled.div`
  a:hover,
  a:focus,
  a:active,
  a:link,
  a:visited {
    color: black !important;
  }
`;

const content = (
  <HomeButton>
    <Link className="navbar-brand" to="/">
      <div className="container w-100">
        <div className="row">
          <div className="col shadows-into-light">
            <div className="row">
              <h3>Pathetic</h3>
            </div>
            <div className="row">
              <h3>Presents</h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </HomeButton>
);

function Logo() {
  return content;
}

export default Logo;
