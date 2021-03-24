import {route} from "./route";

describe('route', () => {
  let action;
  let coord
  it('should return default state if no action type is recognized', function () {
    expect(route({}, {type: null})).toEqual({})
  });
})
