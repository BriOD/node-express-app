import axios from 'axios';
import { FETCH_USER, FETCH_TOURNEYS, FETCH_TOURNEY } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitTourney = (values, history) => async dispatch => {
  const res = await axios.post('/api/tourneys', values);
  history.push('/tourneys');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTourneys = () => async dispatch => {
  const res = await axios.get('/api/tourneys');
  // console.log('data', res.data);
  dispatch({ type: FETCH_TOURNEYS, payload: res.data });
};

export const fetchTourney = id => async dispatch => {
  const res = await axios.get(`/api/tourneys/${id}`);

  dispatch({ type: FETCH_TOURNEY, payload: res.data });
};

// export function fetchTourneys() {
//   const req = axios.get('/api/tourneys');
//   console.log('request:', req);
//   return {
//     type: FETCH_TOURNEYS,
//     payload: req
//   };
// }
