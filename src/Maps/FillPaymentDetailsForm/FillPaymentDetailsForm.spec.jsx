import React from 'react'
import {render, screen} from '@testing-library/react'
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {FillPaymentDetailsForm} from "./FillPaymentDetailsForm";


describe('FillPaymentDetailsForm', () => {
  const history = createMemoryHistory()
  it('render inputs correctly', () => {
    render(<Router history={history}><FillPaymentDetailsForm /></Router>)
    
    expect(screen.getByTestId('fillData')).toContainElement(screen.getByText('Заполните платежные данные'))
    expect(screen.getByTestId('info')).toContainElement(screen.getByText('Укажите информацию о банковской карте, чтобы сделать заказ'))
    expect(screen.getByTestId('button')).toContainElement(screen.getByText('Перейти в профиль'))
  })
})

