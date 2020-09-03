import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./page/Home";
import Header from "./layout/Header";
import {ProductProvider} from "./context/ProductContext";
import LoginPage from "./page/LoginPage";
import RegistrationPage from "./page/RegistrationPage";
import {UserProvider} from "./context/UserContext";
import Admin from "./page/Admin";
import UserProduct from "./page/UserProduct";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <ProductProvider>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/registration" component={RegistrationPage}/>
                    <Route exact path="/UserProduct/:id" component={UserProduct}/>
                </ProductProvider>
                <UserProvider>
                    <Route exact path="/admin" component={Admin}/>
                </UserProvider>
            </Router>
        </div>
    );

}

export default App;
