import React from 'react'
import {Container, Typography} from "@material-ui/core";
import {LoginForm} from "./LoginForm/LoginForm";
import PropTypes from "prop-types";
import {ButtonsToRedirect} from "../../helpers/ButtonsToRedirect";

export const LoginModal = ({navigateTo, onSubmit}) => {
  return (
    <>
      <Container style={{
        display: "flex",
        padding: "0 102px 0 98px",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Typography variant="h4" gutterBottom>
          Войти
        </Typography>
        <LoginForm navigateTo={navigateTo} onSubmit={onSubmit}/>
      </Container>
      <ButtonsToRedirect tittle={'Новый пользователь?'} navigateTo={navigateTo} buttonText={'Зарегистрируйтесь'} />
    </>
  )
}

LoginModal.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
