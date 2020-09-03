import React from "react";
import loading from "./loading.gif";
import {Link} from "react-router-dom";

const UserList = ({users, usersAreLoading}) => {

    let content = (
        <div className="d-flex justify-content-center">
            <img src={loading} alt=""/>
        </div>
    );

    if (!usersAreLoading && users[0]) {
        content = (
            users[0].map((user) => (
                <li key={user.id}>
                    <Link to={`/UserProduct${user.id}`}>{user.username}</Link>
                </li>
            )));
    }
    return content;
}

export default UserList;