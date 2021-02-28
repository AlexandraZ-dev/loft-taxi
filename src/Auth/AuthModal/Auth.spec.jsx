import React from 'react'
import {render} from '@testing-library/react'
import {AuthModal} from "./Auth";

jest.mock('./Auth', () => ({Auth: () => <div>Auth component</div>}))

describe('Auth', () => {
  it('renders correctly', () => {
    const {container} = render(<AuthModal/>)
    expect(container.innerHTML).toMatch('Auth component')
  })
})

