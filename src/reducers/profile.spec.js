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
  it('should return false', function () {
    isSaved = false;
    action = {
      type: 'NOT_SAVE',
    }
    expect(profile({}, action)).toEqual({isSaved})
  });
  it('should return true if have profile', function () {
    isSaved = true;
    action = {
      type: 'HAVE_PROFILE',
    }
    expect(profile({}, action)).toEqual({isSaved})
  });
  it('should return false if not have profile', function () {
    isSaved = false;
    action = {
      type: 'NOT_PROFILE',
    }
    expect(profile({}, action)).toEqual({isSaved})
  });
})
