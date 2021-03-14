import React from 'react'
import {render, screen} from '@testing-library/react'
import {LoginForm} from './LoginForm'
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();

describe('LoginForm', () => {
  let store;
  beforeEach(() => {
    store = mockStore({

    });
  });
  it('render inputs correctly', () => {
    const onSubmit = jest.fn(e => e.preventDefault);
    render(<Provider store={store}><LoginForm onSubmit={onSubmit} /></Provider>)
    
    expect(screen.getByTestId('email')).toContainElement(screen.getByText('Имя пользователя'))
    expect(screen.getByTestId('password')).toContainElement(screen.getByText('Пароль'))
    expect(screen.getByTestId('submitButton')).toContainElement(screen.getByText('Войти'))
  })

})

