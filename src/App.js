import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
   return (
      <div className="wrapper">
         <Header />
         <div className="content"></div>
         <Route path={"/"} component={Home} exact />
         <Route path={"/cart"} component={Cart} exact />
      </div>
   );
}

export default App;
