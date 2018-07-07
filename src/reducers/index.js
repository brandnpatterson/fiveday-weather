import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
  error: errorReducer,
  weather: weatherReducer
});
