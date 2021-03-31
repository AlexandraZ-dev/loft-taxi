import React from 'react'
import {BasePage} from "../helpers/BasePage";
import {Container, Typography} from "@material-ui/core";
import {SingUpFormWithAuth} from "./SingUpForm/SingUpForm";
import {ButtonsToRedirect} from "../helpers/ButtonsToRedirect";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const SingUp = ({ isLoggedIn}) => {

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
        <Typography data-testid='auth' variant="h4" gutterBottom>
          Регистрация
        </Typography>
        <SingUpFormWithAuth/>
      </Container>
      <ButtonsToRedirect tittle={'Уже зарегистрован?'} navigateTo={'/'} buttonText={'Войти'} />
    </BasePage>

  )
}

export const SingUpWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
)(SingUp)

