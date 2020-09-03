import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./page/Home";
import Header from "./layout/Header";
import {ProductProvider} from "./context/ProductContext";
import Admin from "./page/Admin";
import {UserProvider} from "./context/UserContext";
import UserProduct from "./page/UserProduct";

function App() {
    return (
        <div className="App">
            <Router>
                <ProductProvider>
                    <Header/>
                    <Route exact path="/" component={Home}/>
                </ProductProvider>

                <UserProvider>
                    <Route exact path="/admin" component={Admin}/>
                </UserProvider>

                <Route exact path="/UserProduct:id" component={UserProduct}/>
            </Router>
        </div>
    );
}

export default App;
