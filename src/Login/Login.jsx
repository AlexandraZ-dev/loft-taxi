import React from 'react'
import {LoginModal} from "./LoginModal/LoginModal";
import {BasePage} from "../helpers/BasePage";
import {connect} from "react-redux";
import {authenticate} from "../actions";

export const Login = () => {
  const onSubmitLogin = (e) => {
    e.preventDefault()
    const {email, password} = e.target
    console.log(email.value);
    authenticate(email.value, password.value)
  }
  return (
    <BasePage>
      <LoginModal onSubmit={onSubmitLogin}/>
    </BasePage>

  )
}

export const LoginWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  {authenticate}
)(Login)
