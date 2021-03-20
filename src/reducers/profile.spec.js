import {profile} from "./profile";

describe('profile', () => {
  let action;
  let isSaved
  it('should return default state if no action type is recognized', function () {
    expect(profile({}, {type: null})).toEqual({})
  });
  it('should return true', function () {
    isSaved = true;
    action = {
      type: 'SAVE',
    }
    expect(profile({}, action)).toEqual({isSaved})
  });
})
