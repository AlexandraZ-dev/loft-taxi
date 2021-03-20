import React from 'react'
import {BasePage} from "../helpers/BasePage";
import {connect} from "react-redux";
import {authenticate} from "../actions";
import {useHistory} from "react-router";
import {Container, Typography} from "@material-ui/core";
import {LoginForm} from "./LoginForm/LoginForm";
import {ButtonsToRedirect} from "../helpers/ButtonsToRedirect";

export const Login = ({authenticate}) => {
  const history = useHistory()

  const onSubmitLogin = async (e) => {
    e.preventDefault()
    const {email, password} = e.target
    await authenticate(email.value, password.value)
    console.log(3)
    history.push('/maps')
    console.log(4)
  }
  return (
    <BasePage>
      <Container style={{
        display: "flex",
        padding: "0 102px 0 98px",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Typography data-testid='logInText' variant="h4" gutterBottom>
          Войти в кабинет
        </Typography>
        <LoginForm onSubmit={onSubmitLogin}/>
      </Container>
      <ButtonsToRedirect tittle={'Новый пользователь?'} navigateTo={'/singUp'} buttonText={'Зарегистрируйтесь'}/>

    </BasePage>
  )
}

export const LoginWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  {authenticate}
)(Login)
