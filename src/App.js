import React, { Component } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/ShopPage";
import SignInSignUp from "./Pages/SignInSignUp/SignInSignUp";

import { auth } from "./firebase/firebase.utils";

import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
