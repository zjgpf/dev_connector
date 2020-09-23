import { addAlert } from './alert';
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  LOGOUT,
  GET_REPOS,
  NO_REPO
} from './types';

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
    if (data.msg) dispatch({type: PROFILE_ERROR, payload: data.msg});
    else {
      dispatch({
        type: GET_PROFILE,
        payload: data
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const getProfiles = ()=> async dispatch=> {
  try {
    dispatch({ type: CLEAR_PROFILE });
    const res = await fetch('/api/profile');
    const data = await res.json();
    if (data.msg) dispatch({type: PROFILE_ERROR, payload: data.msg});
    else {
      dispatch({
        type: GET_PROFILES,
        payload: data
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const getProfileById = id=> async dispatch=> {
  dispatch({type: CLEAR_PROFILE});
  try {
    const res = await fetch(`/api/profile/user/${id}`);
    const data = await res.json();
    if (data.msg) dispatch({type: PROFILE_ERROR, payload: data.msg});
    else {
      dispatch({
        type: GET_PROFILE,
        payload: data
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const getRepos = userName=> async dispatch=> {
  try {
    const res = await fetch(`/api/profile/github/${userName}`);
    const data = await res.json();
    if (data.msg) dispatch({type: NO_REPO, payload: data.msg});
    else {
      dispatch({
        type: GET_REPOS,
        payload: data
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const createEditProfile = (formData, history, isEdit = false) => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    };
    const res = await fetch('/api/profile', config);
    const data = await res.json();
    if (data.msg) dispatch({type: PROFILE_ERROR, payload: data.msg});
    else {
      dispatch({
        type: GET_PROFILE,
        payload: data
      });
      dispatch(addAlert(isEdit ? 'Profile Updated' : 'Profile Created', 'bg-green-600'));
      if (!isEdit) {
        history.push('/dashboard');
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const addExperience = (formData, history) => async dispatch => {
  try {
    dispatch(addAlert('Adding experience...', 'bg-gray-500'));
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    };
    const res = await fetch('/api/profile/experience', config);
    const data = await res.json();
    if (data.msg) dispatch({type: PROFILE_ERROR, payload: data.msg});
    else {
      dispatch({
        type: UPDATE_PROFILE,
        payload: data
      });
      dispatch(addAlert('Experience added...', 'bg-green-600'));
      history.push('/dashboard');
    }
  } catch (err) {
    console.error(err);
  }
};

export const addEducation = (formData, history) => async dispatch => {
  try {
    dispatch(addAlert('Adding education...', 'bg-gray-500'));
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    };
    const res = await fetch('/api/profile/education', config);
    const data = await res.json();
    if (data.msg) dispatch({type: PROFILE_ERROR, payload: data.msg});
    else {
      dispatch({
        type: UPDATE_PROFILE,
        payload: data
      });
      dispatch(addAlert('Education added...', 'bg-green-600'));
      history.push('/dashboard');
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteExperience = id => async dispatch => {
  try {
    dispatch(addAlert('Delete experience...', 'bg-gray-500'));
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token,
      },
      method: 'DELETE',
    };
    const res = await fetch(`/api/profile/experience/${id}`, config);
    const data = await res.json();
    if (data.msg) dispatch({type: PROFILE_ERROR, payload: data.msg});
    else {
      dispatch({
        type: UPDATE_PROFILE,
        payload: data
      });
      dispatch(addAlert('Experience deleted', 'bg-green-600'));
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteEducation = id => async dispatch => {
  try {
    dispatch(addAlert('Delete education...', 'bg-gray-500'));
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token,
      },
      method: 'DELETE',
    };
    const res = await fetch(`/api/profile/education/${id}`, config);
    const data = await res.json();
    if (data.msg) dispatch({type: PROFILE_ERROR, payload: data.msg});
    else {
      dispatch({
        type: UPDATE_PROFILE,
        payload: data
      });
      dispatch(addAlert('Education deleted', 'bg-green-600'));
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteAccount = () => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      dispatch(addAlert('Delete account...', 'bg-gray-500'));
      const token = localStorage.getItem('token');
      if (!token) console.error('No token');
      const config = {
        headers: {
          'x-auth-token': token,
        },
        method: 'DELETE',
      };
      const res = await fetch('/api/profile/', config);
      const data = await res.json();
      dispatch(addAlert('Account deleted', 'bg-red-600'));
      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: LOGOUT });
    } catch (err) {
      console.error(err);
    }
  }
};
