import React from 'react'
import {AppWithAuth} from "./App";
import { render } from '@testing-library/react';

jest.mock('./App', () => ({AppWithAuth: () => <div>App component</div>}))

describe('AppWithAuth', () => {
  it('renders correctly', () => {
    const {container} = render(<AppWithAuth/>)
    expect(container.innerHTML).toMatch('App component')
  })

})

