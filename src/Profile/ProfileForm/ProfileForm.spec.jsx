import React from 'react'
import {render, screen} from '@testing-library/react'
import { ProfileForm } from './ProfileForm';
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import moment from "moment";

const mockStore = configureMockStore();

describe('ProfileForm', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      isSaved: false
    });
  });
  it('render inputs correctly', () => {
    render(<Provider store={store}><ProfileForm /></Provider>)
    
    expect(screen.getByTestId('name')).toContainElement(screen.getByText('Имя владельца'))
    expect(screen.getByTestId('cardNumber')).toContainElement(screen.getByText('Номер карты'))
    expect(screen.getByTestId('date')).toContainElement(screen.getByText('MM/YY'))
    expect(screen.getByTestId('cvc')).toContainElement(screen.getByText('CVC'))
    expect(screen.getByTestId('submitButton')).toContainElement(screen.getByText('Сохранить'))
  })

  it('the fields contain the correct values', () => {
    render(<Provider store={store}><ProfileForm /></Provider>)

    expect(screen.getByTestId('name').querySelector('input')).toHaveValue('')
    expect(screen.getByTestId('cardNumber').querySelector('input')).toHaveValue('')
    expect(screen.getByTestId('date').querySelector('input')).toHaveValue(moment(new Date()).format('MM/YYYY'))
    expect(screen.getByTestId('cvc').querySelector('input')).toHaveValue('')
  })

})

