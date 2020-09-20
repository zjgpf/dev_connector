import {
  GET_PROFILE,
  PROFILE_ERROR,
} from './types'

export const getCurrentProfile = ()=> async dispatch=> {
  try {
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token
      }
    };
    const res = await fetch('/api/profile/me', config);
    const data = await res.json();
    dispatch({
      type: GET_PROFILE,
      payload: data
    });
  } catch (err) {
    console.error(err);
  }
};
