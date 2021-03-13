import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {SingUpForm} from "./SingUpForm";

describe('SingUpForm', () => {
  it('render inputs correctly', () => {
    render(<SingUpForm/>)

    expect(screen.getByTestId('email')).toContainElement(screen.getByText('Адрес электронной почты'))
    expect(screen.getByTestId('name')).toContainElement(screen.getByText('Имя'))
    expect(screen.getByTestId('lastName')).toContainElement(screen.getByText('Фамилия'))
    expect(screen.getByTestId('password')).toContainElement(screen.getByText('Пароль'))
    expect(screen.getByTestId('submitButton')).toContainElement(screen.getByText('Зарегистрироваться'))
  })

  it('button click', () => {
    const onSubmit = jest.fn(e => e.preventDefault);
    render(<SingUpForm navigateTo={onSubmit}/>)
    const button = screen.getByText("Зарегистрироваться");

    fireEvent.click(button)
    expect(onSubmit).toHaveBeenCalled();

  })
})

