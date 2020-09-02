import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const content = (
  <React.Fragment>
    <Button>
      <Link to="/user">
        <h6 className="open-sans">
          <i class="far fa-user"></i> {localStorage.getItem("username")}
        </h6>
      </Link>
    </Button>
  </React.Fragment>
);

function UserButton() {
  return content;
}

export default UserButton;
