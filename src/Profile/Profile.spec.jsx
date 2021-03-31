import React from 'react'
import {render, screen} from '@testing-library/react'
import { Profile } from './Profile';
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('Profile', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      isSaved: false,
      isProfile: false,
    });
  });
  it('render elements correctly', () => {

    render(<Provider store={store}><Profile/></Provider>)
    
    expect(screen.getByTestId('profile')).toContainElement(screen.getByText('Профиль'))
    expect(screen.getByTestId('add-data')).toContainElement(screen.getByText('Введите платежные данные'))
  })

})

