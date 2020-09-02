import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import UserList from "../styledComponents/UserList";

function Admin(){
    //const[products, productsAreLoading] = useContext(ProductContext);
    const users = useContext(UserContext);

   /* const handleSubmit = (event) => {
        event.preventDefault();
    }*/

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