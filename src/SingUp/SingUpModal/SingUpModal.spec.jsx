import React from 'react'
import {render} from '@testing-library/react'
import {SingUpModal} from "./SingUpModal";

jest.mock('./AuthModal', () => ({AuthModal: () => <div>AuthModal component</div>}))

describe('AuthModal', () => {
  it('render correctly', () => {
    const navigateTo = () =>{
      return 'login'
    }
    const {container} = render(<SingUpModal navigateTo={navigateTo}/>)

    expect(container.innerHTML).toMatch('AuthModal component')
  })

})

