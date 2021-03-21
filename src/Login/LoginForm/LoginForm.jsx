import React from 'react'
import {
  Button,
  TextField
} from "@material-ui/core";
import PropTypes from "prop-types";

export const LoginForm = ({onSubmit}) => {
  return (
    <form style={{marginBottom: '24px'}} onSubmit={onSubmit}>
      <TextField
        id="email"
        data-testid='email'
        label='Имя пользователя'
        type="email"
        name="email"
        margin="normal"
        fullWidth
        color="primary"
        required
      />
      <TextField
        id="password"
        data-testid='password'
        label='Пароль'
        type="password"
        name="password"
        margin="normal"
        fullWidth
        color="primary"
        required
      />
      <Button type='submit' data-testid='submitButton' fullWidth={true} variant='contained' color='primary'
              style={{marginTop: '72px', borderRadius: "40px", fontSize: "1.3rem"}}
      >Войти</Button>
    </form>

  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
