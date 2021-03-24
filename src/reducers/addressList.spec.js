import {addressList} from "./addressList";

describe('addressList', () => {
  let action;
  let isLoading
  it('should return default state if no action type is recognized', function () {
    expect(addressList({}, {type: null})).toEqual({})
  });
  it('should return false', function () {
    isLoading = false;
    action = {
      type : 'ADDRESS_LIST',
    }
    expect(addressList({}, action)).toEqual({isLoading})
  });
  it('should return true', function () {
    isLoading = true;
    action = {
      type : 'ADDRESS_LIST_REQUEST',
    }
    expect(addressList({}, action)).toEqual({isLoading})
  });
})
