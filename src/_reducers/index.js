import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { momentCreation } from './momentCreation.reducer';
import { moments } from './moments.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  momentCreation,
  moments,
  alert
});

export default rootReducer;