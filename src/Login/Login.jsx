import React from 'react'
import {LoginModal} from "./LoginModal/LoginModal";
import {BasePage} from "../helpers/BasePage";
import {connect} from "react-redux";
import {authenticate, logIn} from "../actions";
import {useHistory} from "react-router";

export const Login = ({authenticate, logIn}) => {
  const history = useHistory()

  const onSubmitLogin = (e) => {
    e.preventDefault()
    const {email, password} = e.target
    authenticate(email.value, password.value)
    logIn()
    history.push('/maps')

  }
  return (
    <BasePage>
      <LoginModal onSubmit={onSubmitLogin}/>
    </BasePage>
  )
}

export const LoginWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  {authenticate, logIn}
)(Login)
