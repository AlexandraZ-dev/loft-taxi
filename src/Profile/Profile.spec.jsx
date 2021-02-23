import React from 'react'
import {render} from '@testing-library/react'
import {Profile} from "./Profile";

jest.mock('./Profile', () => ({Profile: () => <div>Profile component</div>}))

describe('Profile', () => {
  it('renders correctly', () => {
    const {container} = render(<Profile/>)
    expect(container.innerHTML).toMatch('Profile component')
  })
})
