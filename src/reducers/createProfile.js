import { createProfile } from '../api/profile';
import history from '../history';

export const START_CREATE_PROFILE = 'app/profile/START_CREATE_PROFILE';
export const CREATE_PROFILE_SUCCESS = 'app/profile/CREATE_PROFILE_SUCCESS';
export const CREATE_PROFILE_FAIL = 'app/profile/CREATE_PROFILE_FAIL';

const initState = {
  loading: false,
  isError: false,
  errors: ''
};

export const createProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case START_CREATE_PROFILE:
      return {
        ...state,
        loading: true,
        isError: false,
        errors: ''
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        errors: ''
      };
    case CREATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        isError: true,
        errors: action.errors
      };
    default:
      return state;
  }
};

export const startCreateProfile = () => {
  return {
    type: START_CREATE_PROFILE,
    loading: true,
    isError: false,
    errors: ''
  };
};

export const createProfileSuccess = () => {
  return {
    type: CREATE_PROFILE_SUCCESS,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const createProfileFail = errors => {
  return {
    type: CREATE_PROFILE_FAIL,
    loading: false,
    isError: true,
    errors
  };
};

export const createProfileAPI = item => {
  return dispatch => {
    dispatch(startCreateProfile());
    createProfile(item)
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(createProfileSuccess());
        history.push('/home');
      })
      .catch(err => {
        createProfileFail('create profile fail');
      });
  };
};
