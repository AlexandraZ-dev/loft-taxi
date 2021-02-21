import React from 'react'
import {render} from '@testing-library/react'
import {Maps} from "./Maps";


describe('Maps', () => {
  it('renders correctly', () => {
    const {container} = render(<Maps/>)
    expect(container.innerHTML).toMatch('Maps')
  })
})
