import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./layout/Header";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
        </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
