import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import UserList from "../styledComponents/UserList";

function Admin(){
    const users = useContext(UserContext);

    return (
        <React.Fragment>
            <div>
                <UserList
                    users={users}/>
            </div>
        </React.Fragment>
    );
}

export  default Admin;