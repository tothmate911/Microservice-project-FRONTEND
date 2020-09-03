import React, {createContext} from "react";
import useApiCall from "../hook/ApiCall";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const url = "http://localhost:8762/user-service/user/users";
    const [users, usersAreLoading] = useApiCall(url);

    return (
        <UserContext.Provider value={[users, usersAreLoading]}>
            {props.children}
        </UserContext.Provider>
    );
};


