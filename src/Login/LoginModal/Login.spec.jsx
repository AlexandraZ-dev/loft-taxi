import React from 'react'
import {render} from '@testing-library/react'
import {LoginModal} from "./Login";

jest.mock('./Login', () => ({Login: () => <div>Login component</div>}))

describe('Login', () => {
  it('renders correctly', () => {
    const {container} = render(<LoginModal/>)
    expect(container.innerHTML).toMatch('Login component')
  })
})
