import React from 'react';
import {Profile} from './Profile/Profile'
import {Maps} from "./Maps/Maps";
import {LoginWithAuth} from "./Login/Login";
import { HeaderWithAuth} from "./Header/Header";
import {SingUp} from "./SingUp/SingUp";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

const App = ({isLoggedIn}) => {
  console.log(isLoggedIn);
  return (
    <>
      {isLoggedIn && <HeaderWithAuth/>}
      <main>
        <Switch>
          <Route exact path="/" component={LoginWithAuth}/>
          <Route path="/singup" component={SingUp}/>
          {!isLoggedIn ?
            <Redirect to="/"/> :
            (<>
              <Route path="/maps" component={Maps}/>
              <Route path="/profile" component={Profile}/>
            </>)}
        </Switch>
      </main>
    </>)
}

export const AppWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
)(App)




