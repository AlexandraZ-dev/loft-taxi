import React from 'react'
import {BasePage} from "../helpers/BasePage";
import {Container, Typography} from "@material-ui/core";
import {SingUpForm} from "./SingUpForm/SingUpForm";
import {ButtonsToRedirect} from "../helpers/ButtonsToRedirect";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { register} from "../actions";

export const SingUp = ({register, isLoggedIn}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(4);
    const {email, password, name, surname} = e.target
    register(email.value, password.value, name.value, surname.value)
    console.log(3)
    if (isLoggedIn) {
      return <Redirect to='/maps' />
    }
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
        <Typography data-testid='auth' variant="h4" gutterBottom>
          Регистрация
        </Typography>
        <SingUpForm onSubmit={onSubmit}/>
      </Container>
      <ButtonsToRedirect tittle={'Уже зарегистрован?'} navigateTo={'/'} buttonText={'Войти'} />
    </BasePage>

  )
}

export const SingUpWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  {register}
)(SingUp)

