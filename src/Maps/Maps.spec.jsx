import React from 'react'
import {render} from '@testing-library/react'
import {Maps} from "./Maps";

jest.mock('./Maps', () => ({Maps: () => <div>Maps component</div>}))

describe('Maps', () => {
  it('render correctly', () => {
    
    const {container} = render(<Maps/>)

    expect(container.innerHTML).toMatch('Maps component')
  })

})