import React from 'react'
import {Box, Button, TextField} from "@material-ui/core";
import PropTypes from "prop-types";

export const AuthForm = ({navigateTo}) => {
  return (

    <form style={{marginBottom: '24px'}}>
      <TextField
        id="email"
        label='Адрес электронной почты'
        type="email"
        name="email"
        margin="normal"
        fullWidth
        color="primary"
        required
      />
      <Box display='flex' justifyContent='space-between'>
        <TextField
          id="name"
          label='Имя'
          type="text"
          name="name"
          margin="normal"
          color="primary"
          required
        />
        <Box minWidth='8px'/>
        <TextField
          id="lastName"
          label='Фамилия'
          type="text"
          name="lastName"
          margin="normal"
          color="primary"
          required
        />
      </Box>
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
              onClick={() => navigateTo('maps')}>Зарегистрироваться</Button>
    </form>

  )
}

AuthForm.propTypes = {
  navigateTo: PropTypes.func.isRequired,
}
