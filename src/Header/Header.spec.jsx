import React from 'react'
import {render, screen, container} from '@testing-library/react'
import {Header} from "./Header";
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";

const mockStore = configureMockStore();
let store;
beforeEach(() => {
  store = mockStore({
    isSaved: false
  });
});
const history = createMemoryHistory()
describe('Header', () => {

  it('render correctly', () => {
    render(<Provider store={store}><Router history={history}><Header/></Router></Provider>)

    expect(screen.getByTestId('navigateMaps')).toContainElement(screen.getByText('Maps'))
    expect(screen.getByTestId('navigateProfile')).toContainElement(screen.getByText('Profile'))
    expect(screen.getByTestId('navigateLoginOut')).toContainElement(screen.getByText('LOG OUT'))
  })
})

