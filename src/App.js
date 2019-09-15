import React, { Component } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/ShopPage";
import SignInSignUp from "./Pages/SignInSignUp/SignInSignUp";
import { setCurrentUser } from "./redux/userReducer/userActions";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Header from "./Components/Header/Header";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user})

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });

        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
