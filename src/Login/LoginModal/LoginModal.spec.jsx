import React from 'react'
import {render} from '@testing-library/react'
import {LoginModal} from "./LoginModal";

jest.mock('./LoginModal', () => ({LoginModal: () => <div>LoginModal component</div>}))

describe('LoginModal', () => {
  it('renders correctly', () => {
    const navigateTo = jest.fn();
    const onSubmit = jest.fn(e => e.preventDefault);
    const {container} = render(<LoginModal onSubmit={onSubmit} navigateTo={navigateTo}/>)
    expect(container.innerHTML).toMatch('LoginModal component')
  })
})
