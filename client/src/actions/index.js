import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitTourney = (values, history) => async dispatch => {
  const res = await axios.post('/api/tourneys', values);
  history.push('/tourneys');

  dispatch({ type: FETCH_USER, payload: res.data });
};
