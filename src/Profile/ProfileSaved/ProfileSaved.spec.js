import {render, screen} from "@testing-library/react";
import React from "react";
import {ProfileSaved} from "./ProfileSaved";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";


describe('ProfileSaved', () => {
  const history = createMemoryHistory()
  it('render elements correctly', () => {
    render(<Router history={history}><ProfileSaved/></Router>)

    expect(screen.getByTestId('text')).toContainElement(screen.getByText('Платёжные данные обновлены. Теперь вы можете заказывать такси.'))
    expect(screen.getByTestId('link')).toContainElement(screen.getByText('Перейти к заказу такси'))
  })
})
