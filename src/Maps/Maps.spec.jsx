import React from 'react'
import {render} from '@testing-library/react'
import {Maps} from "./Maps";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Maps: () => ({})
}));

it('renders correctly', () => {
  window.URL.createObjectURL = jest.fn();
  const history = createMemoryHistory()

  const {queryByTestId} = render(<Router history={history}><Maps /></Router>);

  expect(queryByTestId("Maps")).toBeTruthy();
});
