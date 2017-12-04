import { FETCH_TOURNEYS, FETCH_TOURNEY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TOURNEY:
      return action.payload;
    case FETCH_TOURNEYS:
      return action.payload;
    default:
      return state;
  }
}
