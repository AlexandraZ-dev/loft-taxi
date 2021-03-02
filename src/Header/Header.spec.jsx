import React from 'react'
import {render} from '@testing-library/react'
import {Header} from "./Header";

jest.mock('./Header', () => ({Header: () => <div>Header component</div>}))

describe('Header', () => {
  it('render correctly', () => {
    const navigateTo = () =>{
      return 'login'
    }
    const {container} = render(<Header navigateTo={navigateTo}/>)

    expect(container.innerHTML).toMatch('Header component')
  })
})

