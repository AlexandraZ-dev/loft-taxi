import React from 'react'
import {render, screen} from '@testing-library/react'
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import {Login} from "./Login";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

const mockStore = configureMockStore();
const history = createMemoryHistory()

describe('Login', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      isLoggedIn: false
    });
  });
  it('render elements correctly', () => {

    render(<Provider store={store}><Router history={history}><Login/></Router></Provider>)

    expect(screen.getByTestId('logInText')).toContainElement(screen.getByText('Войти в кабинет'))
    expect(screen.getByTestId('title')).toContainElement(screen.getByText('Новый пользователь?'))
    expect(screen.getByTestId('buttonText')).toContainElement(screen.getByText('Зарегистрируйтесь'))

  })
})


