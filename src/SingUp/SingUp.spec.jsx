import React from 'react'
import {render, screen} from '@testing-library/react'
import {SingUp} from "./SingUp";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

const history = createMemoryHistory()
describe('SingUp', () => {
  it('renders correctly', () => {
     render(<Router history={history}><SingUp/></Router>)
    expect(screen.getByTestId('auth')).toContainElement(screen.getByText('Регистрация'))
    expect(screen.getByTestId('title')).toContainElement(screen.getByText('Уже зарегистрован?'))
    expect(screen.getByTestId('buttonText')).toContainElement(screen.getByText('Войти'))

  })
})

