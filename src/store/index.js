import { createStore } from 'redux';
import rootReducer from '../reducers';

// Holds the information which is coming out of the reducer
let store = createStore(rootReducer);
