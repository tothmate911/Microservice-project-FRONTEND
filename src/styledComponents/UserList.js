import React from "react";
import { Link } from "react-router-dom";
import { Spinner, Button } from "react-bootstrap";

const UserList = ({ users, usersAreLoading }) => {
  let content = (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" variant="light" />
    </div>
  );

  if (!usersAreLoading && users[0]) {
    content = users[0].map((user) => (
      <li className="list-group-item" key={user.id}>
        <Button>
          <Link to={`/UserProduct/${user.id}`}>{user.username}</Link>
        </Button>
      </li>
    ));
  }
  return content;
};

export default UserList;
