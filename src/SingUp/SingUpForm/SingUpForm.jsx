import React from 'react'
import {Box, Button} from "@material-ui/core";
import * as Yup from "yup";
import {Formik, Form} from "formik";
import {connect} from "react-redux";
import {register} from "../../actions";
import {TextInput} from "../../helpers/Input";

export const SingUpForm = ({register}) => {
  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
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
      <Form style={{marginBottom: '24px'}} data-testid="form">
        <TextInput
          label='Адрес электронной почты'
          name="email"
          type="email"
          placeholder='Адрес электронной почты'
        />

        <Box display='flex' justifyContent='space-between'>
          <TextInput
            label='Имя'
            name="name"
            type="text"
            placeholder='Имя'
          />
          <Box minWidth='8px'/>
          <TextInput
            label='Фамилия'
            name="surname"
            type="text"
            placeholder='Фамилия'
          />
        </Box>
        <TextInput
          label='Пароль'
          name="password"
          type="password"
          placeholder='Пароль'
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

