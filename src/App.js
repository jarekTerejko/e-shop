import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/ShopPage";

import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
