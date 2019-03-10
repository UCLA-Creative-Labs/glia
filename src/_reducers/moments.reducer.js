import { momentConstants } from '../_constants';

export function moments(state = {}, action) {
  switch (action.type) {
    case momentConstants.GETBYUSERNAME_REQUEST:
      return {
        loadingUsername: true
      };
    case momentConstants.GETBYUSERNAME_SUCCESS:
      return {
        items: action.moments
      };
    case momentConstants.GETBYUSERNAME_FAILURE:
      return { 
        error: action.error
      };
    case momentConstants.GETBYDATE_REQUEST:
      return {
        loadingDate: true
      };
    case momentConstants.GETBYDATE_SUCCESS:
      return {
        items: action.moment
      };
    case momentConstants.GETBYDATE_FAILURE:
      return { 
        error: action.error
      };
    case momentConstants.GETRANDOM_REQUEST:
      return {
        loadingRandom: true
      };
    case momentConstants.GETRANDOM_SUCCESS:
      return {
        items: action.moment
      };
    case momentConstants.GETRANDOM_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}