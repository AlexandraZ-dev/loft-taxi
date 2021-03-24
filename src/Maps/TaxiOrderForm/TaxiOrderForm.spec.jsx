import React from 'react'
import {render, screen} from '@testing-library/react'
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import {TaxiOrderForm} from "./TaxiOrderForm";

const mockStore = configureMockStore();

describe('TaxiOrderForm', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      // isSaved: false
    });
  });
  it('render inputs correctly', () => {
    render(<Provider store={store}><TaxiOrderForm /></Provider>)
    
    expect(screen.getByTestId('buttonNewOrder')).toContainElement(screen.getByText('Сделать новый заказ'))
    expect(screen.getByTestId('order')).toContainElement(screen.getByText('Заказ размещён'))
    expect(screen.getByTestId('info')).toContainElement(screen.getByText('Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.'))
  })


})

