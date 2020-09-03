import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./layout/Header";
import { ProductProvider } from "./context/ProductContext";
import LoginPage from "./page/LoginPage";
import RegistrationPage from "./page/RegistrationPage";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/registration" component={RegistrationPage} />
        </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
