import { FETCH_TOURNEYS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TOURNEYS:
      return action.payload;
    default:
      return state;
  }
}
