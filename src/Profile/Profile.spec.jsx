import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import { Profile } from './Profile';

describe('Profile', () => {
  it('render inputs correctly', () => {
    const navigateTo = jest.fn(e => e.preventDefault);
    render(<Profile navigateTo={navigateTo}/>)
    
    expect(screen.getByTestId('name')).toContainElement(screen.getByText('Имя владельца'))
    expect(screen.getByTestId('numberCard')).toContainElement(screen.getByText('Номер карты'))
    expect(screen.getByTestId('date')).toContainElement(screen.getByText('MM/YY'))
    expect(screen.getByTestId('cvc')).toContainElement(screen.getByText('CVC'))
    expect(screen.getByTestId('submitButton')).toContainElement(screen.getByText('Сохранить'))
  })

  it('button click', ()=>{
    const onSubmit = jest.fn(e => e.preventDefault);
    render(<Profile navigateTo={onSubmit}/>)
    const button = screen.getByText("Сохранить");

    fireEvent.click(button)
    expect(onSubmit).toHaveBeenCalled();

  })
})

