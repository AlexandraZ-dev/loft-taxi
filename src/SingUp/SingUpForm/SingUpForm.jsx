import React from 'react'
import {Box, Button, TextField} from "@material-ui/core";
import {Link} from "react-router-dom";

export const SingUpForm = () => {
  return (

    <form style={{marginBottom: '24px'}} data-testid="form">
      <TextField
        id="email"
        data-testid='email'
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
          data-testid='name'
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
          data-testid='lastName'
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
        data-testid='password'
        label='Пароль'
        type="password"
        name="password"
        margin="normal"
        fullWidth
        color="primary"
        required
      />
      <Button fullWidth={true} variant='contained' color='primary'
              style={{marginTop: '72px', borderRadius: "40px", fontSize: "1.3rem"}}
      ><Link to='/maps' data-testid='submitButton'>Зарегистрироваться</Link></Button>
    </form>

  )
}

