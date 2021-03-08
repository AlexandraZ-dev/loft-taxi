import React, {useState} from 'react'
import {
  Button,
  TextField
} from "@material-ui/core";
import PropTypes from "prop-types";
import {authenticate} from "../../../actions";

export const LoginForm = ({onSubmit}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitLogin = (e) => {
    e.preventDefault()
    // const {email, password} = e.value
    console.log(email.value);
    authenticate(setEmail(e.target.value), setPassword(e.target.value))
  }
  return (

    <form style={{marginBottom: '24px'}} onSubmit={onSubmitLogin}>
      <TextField
        id="email"
        data-testid='email'
        label='Имя пользователя'
        type="text"
        name="email"
        value={email}
        margin="normal"
        fullWidth
        color="primary"
        onChange={e => setEmail(e.target.value)}
        required
      />
      <TextField
        id="password"
        data-testid='password'
        label='Пароль'
        type="password"
        name="password"
        value={password}
        margin="normal"
        fullWidth
        color="primary"
        onChange={e => setPassword(e.target.value)}
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
  // handleChange: PropTypes.func.isRequired
}
