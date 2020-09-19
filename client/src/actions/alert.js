import { v4 } from 'uuid';
import { ADD_ALERT, DELETE_ALERT } from './types';

export const addAlert = (msg, bg, ms) => dispatch => { 
  const id = v4();
  dispatch({ type: ADD_ALERT, payload: { id, msg, bg }}); 
  if (!ms) ms = 1000;
  setTimeout(() => dispatch({ type: DELETE_ALERT, payload: id }), ms);
};
