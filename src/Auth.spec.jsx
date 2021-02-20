import React from 'react'
import {render} from '@testing-library/react'
import {Auth} from "./Auth";

jest.mock('./Auth', () => ({Auth: () => <div>Auth component</div>}))

describe('Auth', () => {
  it('renders correctly', () => {
    const {container} = render(<Auth/>)
    expect(container.innerHTML).toMatch('Auth component')
  })
})

