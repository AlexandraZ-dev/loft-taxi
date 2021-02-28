import React from 'react'
import { Container, Link, Typography} from "@material-ui/core";
import {AuthForm} from "./AuthForm/AuthForm";
import PropTypes from "prop-types";

export const AuthModal = ({navigateTo}) => {
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
        <AuthForm navigateTo={navigateTo} />
      </Container>
      <div style={{display: "block", flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: "98px"}}>
        <Typography variant='body1'>Уже зарегистрован?</Typography>
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(253, 191, 90)"
          }}
          component="button"
          variant="body1"
          onClick={() => navigateTo('login')}
        >
          Войти
        </Link>
      </div>
    </>
  )
}

AuthModal.propTypes = {
  navigateTo: PropTypes.func.isRequired,
}
