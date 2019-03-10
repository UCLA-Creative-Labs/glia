import { momentConstants } from '../_constants';

export function momentCreation(state = {}, action) {
  switch (action.type) {
    case momentConstants.CREATE_REQUEST:
      return {
        creating: true
      };
    case momentConstants.CREATE_SUCCESS:
      return {};
    case momentConstants.CREATE_FAILURE:
      return {};
    default:
      return state;
  }
}