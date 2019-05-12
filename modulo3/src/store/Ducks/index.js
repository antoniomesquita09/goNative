import { combineReducers } from 'redux';

import login from './Login';
import repositories from './Repositories';

export default combineReducers({
  login,
  repositories,
});
