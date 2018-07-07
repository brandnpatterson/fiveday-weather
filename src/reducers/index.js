import { combineReducers } from 'redux';
import getWeatherReducer from './getWeatherReducer';

const rootReducer = combineReducers({
  weather: getWeatherReducer
});

export default rootReducer;
