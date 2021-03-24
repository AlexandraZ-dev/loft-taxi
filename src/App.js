import React from 'react';
import {ProfileWithAuth} from './Profile/Profile'
import {MapsWithAuth} from "./Maps/Maps";
import {LoginWithAuth} from "./Login/Login";
import {HeaderWithAuth} from "./Header/Header";
import {SingUpWithAuth} from "./SingUp/SingUp";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

const App = ({isLoggedIn}) => {
  return (
    <>
      {isLoggedIn && <HeaderWithAuth/>}
      <main>
        <Switch>
          <Route exact path="/" component={LoginWithAuth}/>
          <Route path="/singup" component={SingUpWithAuth}/>
          {isLoggedIn ?
            (<>
              <Route path="/maps" component={MapsWithAuth}/>
              <Route path="/profile" component={ProfileWithAuth}/>
            </>)
            : <Redirect to="/"/>
          }
        </Switch>
      </main>
    </>)
}

export const AppWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
)(App)




