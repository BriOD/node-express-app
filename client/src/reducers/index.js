import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import tourneysReducer from './tourneysReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  tourneys: tourneysReducer
});
