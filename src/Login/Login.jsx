import React, {useContext} from 'react'
import {LoginModal} from "./LoginModal/LoginModal";
import {AuthContext} from "../AuthContext";
import PropTypes from "prop-types";
import {BasePage} from "../helpers/BasePage";

export const Login = ({navigateTo}) => {
  const {logIn} = useContext(AuthContext)
  const onSubmitLogin = (event) => {
    event.preventDefault()
    const {email, password} = event.target
    logIn(email.value, password.value)
  }
  return (
    <BasePage>
      <LoginModal navigateTo={navigateTo} onSubmit={onSubmitLogin}/>
    </BasePage>

  )
}

Login.propTypes = {
  navigateTo: PropTypes.func.isRequired
}
