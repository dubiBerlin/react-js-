import { combineReducers } from 'redux';

import info from './reducers_info';

/* Defines what kind of information goes into the store */

const rootReducer = combineReducers({
  // empty array or some json data received by rediucers_info.js received by actions_info.js
  info
});

export default rootReducer;
