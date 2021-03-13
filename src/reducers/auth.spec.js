import {auth} from "./auth";

describe('auth', () => {
  let action;
  let isLoggedIn
  it('should return default state if no action type is recognized', function () {
    expect(auth({}, {type: null})).toEqual({})
  });
  it('should return true', function () {
    isLoggedIn = true;
    action = {
      type : 'LOG_IN',
    }
    expect(auth({}, action)).toEqual({isLoggedIn})
  });
  it('should return false', function () {
    isLoggedIn = false;
    action = {
      type : 'LOG_OUT',
    }
    expect(auth({}, action)).toEqual({isLoggedIn})
  });
})
