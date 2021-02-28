import React from 'react'
import {
  Button,
  TextField
} from "@material-ui/core";

export const LoginForm = ({navigateTo, onSubmit}) => {
  return (

    <form style={{marginBottom: '24px'}} onSubmit={onSubmit}>
      <TextField
        id="email"
        label='Имя пользователя'
        type="text"
        name="email"
        margin="normal"
        fullWidth
        color="primary"
        required
      />
      <TextField
        id="password"
        label='Пароль'
        type="password"
        name="password"
        margin="normal"
        fullWidth
        color="primary"
        required
      />
      <Button type='submit' fullWidth={true} variant='contained' color='primary'
              style={{marginTop: '72px', borderRadius: "40px", fontSize: "1.3rem"}}
              onClick={() => navigateTo('maps')}>Войти</Button>
    </form>

  )
}
