import { combineReducers } from 'redux';
import { homeReducer } from './home';
import { createProfileReducer } from './createProfile';

const reducers = combineReducers({
  homeReducer,
  createProfileReducer
});

export default reducers;
