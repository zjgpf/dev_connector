import { ADD_ALERT, DELETE_ALERT } from '../actions/types'; 

const initialState = { alerts: [] };

export default ( state=initialState, action ) => {
  switch(action.type) {
    case ADD_ALERT: return { alerts: [...state.alerts, action.payload] };
    case DELETE_ALERT: return { alerts: state.alerts.filter( alert => alert.id !== action.payload) };
    default: return state;
  }
};
