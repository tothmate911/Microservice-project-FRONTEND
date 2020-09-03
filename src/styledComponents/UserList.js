import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const UserList = ({ users, usersAreLoading }) => {
  let content = (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" variant="light" />
    </div>
  );

  if (!usersAreLoading && users[0]) {
    content = users[0].map((user) => (
      <li key={user.id}>
        <Link to={`/UserProduct${user.id}`}>{user.username}</Link>
      </li>
    ));
  }
  return content;
};

export default UserList;
