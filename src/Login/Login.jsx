import React from 'react'
import {BasePage} from "../helpers/BasePage";
import {connect} from "react-redux";
import {Container, Typography} from "@material-ui/core";
import {LoginFormWithAuth} from "./LoginForm/LoginForm";
import {ButtonsToRedirect} from "../helpers/ButtonsToRedirect";
import {Redirect} from "react-router-dom";

export const Login = ({ isLoggedIn}) => {

  if (isLoggedIn) {
    return <Redirect to='/maps' />
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
        <LoginFormWithAuth/>
      </Container>
      <ButtonsToRedirect tittle={'Новый пользователь?'} navigateTo={'/singUp'} buttonText={'Зарегистрируйтесь'}/>

    </BasePage>

  )
}

export const LoginWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  // {authenticate}
)(Login)
