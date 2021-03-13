import React from 'react'
import {render} from '@testing-library/react'
import {SingUp} from "./SingUp";

jest.mock('./SingUp', () => ({SingUp: () => <div>SingUp component</div>}))

describe('Auth', () => {
  it('renders correctly', () => {
    const {container} = render(<SingUp/>)
    expect(container.innerHTML).toMatch('SingUp component')
  })
})

