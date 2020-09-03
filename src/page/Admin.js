import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserList from "../styledComponents/UserList";

function Admin() {
  const users = useContext(UserContext);

  return (
    <React.Fragment>
      <div className="container p-5 mb-3">
        <ul class="list-group">
          <UserList users={users} />
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Admin;
