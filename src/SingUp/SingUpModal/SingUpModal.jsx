import React from 'react'
import { Container, Typography} from "@material-ui/core";
import {SingUpForm} from "./SingUpForm/SingUpForm";
import {ButtonsToRedirect} from "../../helpers/ButtonsToRedirect";

export const SingUpModal = () => {
  return (
    <>
      <Container style={{
        display: "flex",
        padding: "0 102px 0 98px",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Typography variant="h4" gutterBottom>
          Регистрация
        </Typography>
        <SingUpForm />
      </Container>
      <ButtonsToRedirect tittle={'Уже зарегистрован?'} navigateTo={'/login'} buttonText={'Войти'} />
    </>
  )
}

