import React from 'react'
import {
  Button,
  Container,
  Link,
  TextField, Typography
} from "@material-ui/core";
import {LoginForm} from "./LoginForm/LoginForm";

export const LoginModal = ({navigateTo}) => {
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
        <LoginForm navigateTo={navigateTo}/>
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
