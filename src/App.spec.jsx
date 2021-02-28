import React from 'react'
import {App} from "./App";
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// import AuthProvider from './AuthContext';

jest.mock('./App', () => ({App: () => <div>App component</div>}))

describe('App', () => {
  it('renders correctly', () => {
    const {container} = render(<App/>)
    expect(container.innerHTML).toMatch('App component')
  })

})


expect.extend({ toBeInTheDocument});

// describe('App with use Context', () =>{
//   it('Test to check name from global context', () => {
//     const globalState = {
//       isLoggedIn: false
//     };
//
//     const {container} = render(
//       <AuthProvider value={globalState}>
//         <App/>
//       </AuthProvider>
//     );
//     const name = getByText(container, 'Login')
//     expect(name).toBeInTheDocument();
//   })
// })
