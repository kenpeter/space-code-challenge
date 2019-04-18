import { combineReducers } from 'redux';
import { homeReducer } from './home';
import { createProfileReducer } from './createProfile';
import { editProfileReducer } from './editProfile';

const reducers = combineReducers({
  homeReducer,
  createProfileReducer,
  editProfileReducer
});

export default reducers;
