import axios from 'axios';
import { CLEAR_ERRORS, GET_ERRORS, GET_WEATHER } from './types';

// Get Weather
export const getWeather = city => dispatch => {
  dispatch(clearErrors());

  const API_KEY = '40970c8c5dadc8a79af9be1aece02dc0';
  const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
  const error = 'Sorry, that city was not found';

  axios
    .get(`${ROOT_URL}&q=${city},us`)
    .then(res => {
      dispatch({
        type: GET_WEATHER,
        payload: res.data
      });
      dispatch({
        type: CLEAR_ERRORS
      });
    })
    .catch(() => {
      dispatch({
        type: GET_ERRORS,
        payload: error
      });
    });
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
