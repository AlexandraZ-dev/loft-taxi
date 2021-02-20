import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from "./App";

jest.mock('./Auth', () => ({Auth: () => <div>Auth component</div>}))
jest.mock('./Profile', () => ({Profile: () => <div>Profile component</div>}))
jest.mock('./Maps', () => ({About: () => <div>Maps component</div>}))
jest.mock('./Login', () => ({About: () => <div>Login component</div>}))
jest.mock('./App', () => ({App: () => <div>App component</div>}))

describe('App', () => {
  it('renders correctly', () => {
    const {container} = render(<App/>)
    expect(container.innerHTML).toMatch('App component')
  })

  describe('when clicked on navigation buttons', ()=> {
    it('opens the corresponding page', () => {
      const {getByText, container} = render(<App />)

      fireEvent.click(getByText('Auth'))
      expect(container.innerHTML).toMatch("Auth component")

      fireEvent.click(getByText('Profile'))
      expect(container.innerHTML).toMatch("Profile component")

      fireEvent.click(getByText('Maps'))
      expect(container.innerHTML).toMatch("Maps component")
    })
  })
})
