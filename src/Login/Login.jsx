import React from 'react'
import {LoginModal} from "./LoginModal/LoginModal";
import {BasePage} from "../helpers/BasePage";
import {connect} from "react-redux";
import {authenticate} from "../actions";
import {useHistory} from "react-router";

export const Login = ({authenticate}) => {
  const history = useHistory()

  const onSubmitLogin = async (e) => {
    e.preventDefault()
    const {email, password} = e.target
    await authenticate(email.value, password.value)
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
  {authenticate}
)(Login)
