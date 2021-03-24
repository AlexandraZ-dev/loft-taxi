import {addressListSaga} from './addressListSaga'
import {recordSaga} from "./recordSaga";
import {ADDRESS_LIST, addressRequest} from "../actions";

jest.mock('../api', () => ({
  serverAddressList: jest.fn(() => {[]
  })
}))

describe('addressListSaga', () => {
  describe('#ADDRESS_LIST_REQUEST', () => {
    it('should get addresses', async function () {
      const dispatched = await recordSaga(
        addressListSaga,
        addressRequest()
      )
      expect(dispatched).toEqual([
        {type: ADDRESS_LIST}
      ])
    });
  })
})
