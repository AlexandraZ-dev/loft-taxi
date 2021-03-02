import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {LoginForm} from './LoginForm'

describe('LoginForm', () => {
  it('render inputs correctly', () => {
    const navigateTo = jest.fn(e => e.preventDefault);
    const onSubmit = jest.fn(e => e.preventDefault);
    render(<LoginForm navigateTo={navigateTo} onSubmit={onSubmit}/>)
    
    expect(screen.getByTestId('email')).toContainElement(screen.getByText('Имя пользователя'))
    expect(screen.getByTestId('password')).toContainElement(screen.getByText('Пароль'))
    expect(screen.getByTestId('submitButton')).toContainElement(screen.getByText('Войти'))
  })

  it('button click', ()=>{
    const navigateTo = jest.fn(e => e.preventDefault);
    const onSubmit = jest.fn(e => e.preventDefault);
    render(<LoginForm navigateTo={navigateTo} onSubmit={onSubmit}/>)
    const button = screen.getByText("Войти");

    fireEvent.click(button)
    expect(navigateTo).toHaveBeenCalled();

  })
})

