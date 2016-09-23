import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import users from 'reducers/users';
import team from 'reducers/team';

export default combineReducers({
  counter,
  users,
  team,
});
