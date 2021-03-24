import React from 'react'
import {render, screen} from '@testing-library/react'
import {SingUpForm} from "./SingUpForm";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
const history = createMemoryHistory()

describe('SingUpForm', () => {
  const onSubmit = jest.fn(e => e.preventDefault);
  it('render inputs correctly', () => {
    render(<Router history={history} ><SingUpForm onSubmit={onSubmit}/></Router>)

    expect(screen.getByTestId('email')).toContainElement(screen.getByText('Адрес электронной почты'))
    expect(screen.getByTestId('name')).toContainElement(screen.getByText('Имя'))
    expect(screen.getByTestId('surname')).toContainElement(screen.getByText('Фамилия'))
    expect(screen.getByTestId('password')).toContainElement(screen.getByText('Пароль'))
    expect(screen.getByTestId('submitButton')).toContainElement(screen.getByText('Зарегистрироваться'))
  })


})

