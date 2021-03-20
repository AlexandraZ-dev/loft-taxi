import {authMiddleware} from "./authMiddleware";

describe('authMiddleware', () => {
  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()

    const invoke = (store) => (next) =>  (action)

    return { store, next, invoke }
  }
  it('passes through non-function action', () => {
    const { next, invoke } = create()
    const action = { type: 'TEST' }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  })
})
