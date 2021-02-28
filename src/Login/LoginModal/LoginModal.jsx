import React from 'react'
import {Container, Link, Typography} from "@material-ui/core";
import {LoginForm} from "./LoginForm/LoginForm";
import PropTypes from "prop-types";

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
      <div style={{display: "block", flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: "98px"}}>
        <Typography variant='body1'>Новый пользователь?</Typography>
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(253, 191, 90)"
          }}
          component="button"
          variant="body1"
          onClick={() => navigateTo('auth')}
        >
          Зарегистрируйтесь
        </Link>
      </div>
    </>
  )
}

LoginModal.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
