import React from 'react'
import {Box, Button, TextField} from "@material-ui/core";
import * as Yup from "yup";
import {Formik, Form} from "formik";
import {connect} from "react-redux";
import {register} from "../../actions";

export const SingUpForm = ({register}) => {
  const onSubmit = (values, { setSubmitting }) => {
    register(values.email, values.password, values.name, values.surname)
    setSubmitting(false)
  }
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        surname: '',
        password: '',
      }}
      validationSchema={Yup.object({
        password: Yup.string()
          .required('Required'),
        name: Yup.string()
          .required('Required'),
        surname: Yup.string()
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={onSubmit}
    >
      <Form style={{marginBottom: '24px'}} data-testid="form" onSubmit={onSubmit}>
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
            id="surname"
            data-testid='surname'
            label='Фамилия'
            type="text"
            name="surname"
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
        <Button fullWidth={true} variant='contained' color='primary' type='submit'
                style={{marginTop: '72px', borderRadius: "40px", fontSize: "1.3rem"}} data-testid='submitButton'
        >Зарегистрироваться</Button>
      </Form>
    </Formik>

  )
}

export const SingUpFormWithAuth = connect(
  null,
  {register}
)(SingUpForm)

