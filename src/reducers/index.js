import { combineReducers } from 'redux';

/* Defines what kind of information goes into the store */

const rootReducer = combineReducers({
  thing: 'thing' // just random text added because it has not to be undefined
});

export default rootReducer;
