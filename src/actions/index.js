import axios from 'axios';
import { GET_WEATHER } from './types';

export const getWeather = city => {
  const API_KEY = '40970c8c5dadc8a79af9be1aece02dc0';
  const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url).catch(err => err.response.data);

  return {
    type: GET_WEATHER,
    payload: request
  };
};
