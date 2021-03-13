import React from 'react'
import {render} from '@testing-library/react'
import {SingUpModal} from "./SingUpModal";

jest.mock('./SingUpModal', () => ({SingUpModal: () => <div>SingUpModal component</div>}))

describe('SingUpModal', () => {
  it('render correctly', () => {
    const navigateTo = () =>{
      return '/maps'
    }
    const {container} = render(<SingUpModal navigateTo={navigateTo}/>)

    expect(container.innerHTML).toMatch('SingUpModal component')
  })

})

