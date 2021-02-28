import React from 'react'
import {
  Button,
  TextField
} from "@material-ui/core";

export const LoginForm = ({navigateTo}) => {
  return (

    <form style={{marginBottom: '24px'}}>
      <TextField
        id="name"
        label='Имя пользователя'
        type="text"
        name="name"
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
