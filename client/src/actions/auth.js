import { 
  REGISTER_SUCCESS, 
  REGISTER_FAILED, 
  SET_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT
} from './types';

export const register = user => async dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };
  try {
    const _data = await fetch('/api/register', config); 
    const data = await _data.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      dispatch({type: REGISTER_SUCCESS, payload: data.token});
      dispatch(loadUser());
    }
    else if (data.msg) {
      dispatch({type: REGISTER_FAILED, payload: data.msg});
    }
  }
  catch (err) {
    dispatch({type: REGISTER_FAILED, payload: 'Register Failed'});
  }
}

export const login = user => async dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };
  try {
    const _data = await fetch('/api/auth', config); 
    const data = await _data.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      dispatch({type: LOGIN_SUCCESS, payload: data.token});
      dispatch(loadUser());
    }
    else if (data.msg) {
      dispatch({type: LOGIN_FAILED, payload: data.msg});
    }
  }
  catch (err) {
    dispatch({type: LOGIN_FAILED, payload: 'Login Failed'});
  }
}

export const loadUser = ()=> async dispatch=> {
  const token = localStorage.getItem('token');
  if (!token) return;
  const config = {
    headers: {
      'x-auth-token': token
    }
  }
  try {
    const _data = await fetch('/api/auth', config);
    const data = await _data.json();
    if (data.msg) {
      dispatch({type: LOGIN_FAILED, msg: data.msg});
    }
    else {
      dispatch({type: LOGIN_SUCCESS, payload: data});
    }
  }
  catch (err) {
    dispatch({type: LOGIN_FAILED, msg: 'Authenticated Failed'});
  }
};

export const logout = ()=> ({ type: LOGOUT });
