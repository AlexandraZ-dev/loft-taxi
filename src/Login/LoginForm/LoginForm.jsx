import React from 'react'
import {
  Button,
} from "@material-ui/core";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {TextInput} from "../../helpers/Input";
import {connect} from "react-redux";
import {authenticate} from "../../actions";

export const LoginForm = ({authenticate}) => {
  const onSubmitLogin = (values, { setSubmitting }) => {
    authenticate(values.email, values.password)
    setSubmitting(false)
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        password: Yup.string()
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={onSubmitLogin}
    >
    <Form style={{marginBottom: '24px'}} >
      <TextInput
        label='Имя пользователя'
        name="email"
        type="email"
        placeholder='Имя пользователя'
      />
      <TextInput
        label='Пароль'
        name="password"
        type="password"
        placeholder='Пароль'
      />
      <Button type='submit' data-testid='submitButton' fullWidth={true} variant='contained' color='primary'
              style={{marginTop: '72px', borderRadius: "40px", fontSize: "1.3rem"}}
      >Войти</Button>
    </Form>
    </Formik>

  )
}
export const LoginFormWithAuth = connect(
  null,
  {authenticate}
)(LoginForm)
