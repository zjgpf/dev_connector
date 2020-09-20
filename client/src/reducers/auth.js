import { 
  REGISTER_SUCCESS, 
  REGISTER_FAILED, 
  SET_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT
} from '../actions/types'; 

const initialState = {
  isAuthenticated: null,
  token: null,
  user: null,
  loading: false,
  isRegisterSuccess: null,
  msg: null,
};

export default ( state=initialState, action ) => {
  switch(action.type) {
    case REGISTER_SUCCESS: 
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        msg: 'Register Successed',
        loading: false,
        isRegisterSuccess: true
    };
    case REGISTER_FAILED: 
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        msg: action.payload,
        loading: false,
        isRegisterSuccess: false,
        token: null
    };
    case LOGIN_FAILED:
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        msg: action.payload,
        loading: false,
        isAuthenticated: false, 
        token: null
    };
    case SET_LOADING: return {
      ...state,
      loading: true
    };
    case LOGIN_SUCCESS: return {
      ...state,
      loading: false,
      isAuthenticated: true,
      user: action.payload,
      msg: 'Login Succeeded'
    };
    case LOGOUT:
      localStorage.removeItem('token');
      return initialState;
    default: return state;
  }
};
