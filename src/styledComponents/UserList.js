import React from "react";
import loading from "./loading.gif";

const UserList = ({users, usersAreLoading}) => {

    let content = (
        <div className="d-flex justify-content-center">
            <img src={loading} alt=""/>
        </div>
    );

    if (!usersAreLoading && users[0]) {
        content = (
            users[0].map((user) => (
                <li key={user.id}>{user.username}
                    <a href={`http://localhost:8762/product-service/products/user/${user.id}`}>Products</a>
                </li>
            )));
    }
    return content;
}

export default UserList;