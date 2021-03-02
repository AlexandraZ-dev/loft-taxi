import React from 'react'
import { Container, Typography} from "@material-ui/core";
import {SingUpForm} from "./SingUpForm/SingUpForm";
import PropTypes from "prop-types";
import {ButtonsToRedirect} from "../../helpers/ButtonsToRedirect";

export const SingUpModal = ({navigateTo, navigateToWhenIsLoggedOut}) => {
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
        <SingUpForm navigateTo={navigateTo} />
      </Container>
      <ButtonsToRedirect tittle={'Уже зарегистрован?'} navigateTo={() => navigateToWhenIsLoggedOut('login')} buttonText={'Войти'} />
    </>
  )
}

SingUpModal.propTypes = {
  navigateToWhenIsLoggedOut: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
}
