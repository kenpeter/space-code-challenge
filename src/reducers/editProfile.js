import { editProfile } from '../api/profile';
import history from '../history';

export const START_EDIT_PROFILE = 'app/profile/START_EDIT_PROFILE';
export const EDIT_PROFILE_SUCCESS = 'app/profile/EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAIL = 'app/profile/EDIT_PROFILE_FAIL';

const initState = {
  loading: false,
  isError: false,
  errors: ''
};

export const editProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case START_EDIT_PROFILE:
      return {
        ...state,
        loading: true,
        isError: false,
        errors: ''
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        errors: ''
      };
    case EDIT_PROFILE_FAIL:
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

export const startEditProfile = () => {
  return {
    type: START_EDIT_PROFILE,
    loading: true,
    isError: false,
    errors: ''
  };
};

export const editProfileSuccess = () => {
  return {
    type: EDIT_PROFILE_SUCCESS,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const editProfileFail = errors => {
  return {
    type: EDIT_PROFILE_FAIL,
    loading: false,
    isError: true,
    errors
  };
};

export const editProfileAPI = item => {
  return dispatch => {
    dispatch(startEditProfile());
    editProfile(item)
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(editProfileSuccess());
        history.push('/home');
      })
      .catch(err => {
        editProfileFail('edit profile fail');
      });
  };
};
