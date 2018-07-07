import { GET_WEATHER } from '../actions/types';

const initialState = {
  cities: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return action.payload.data === undefined
        ? {
            cities: [...state.cities],
            error: 'Sorry, that city was not found'
          }
        : {
            cities: [action.payload.data, ...state.cities],
            error: ''
          };
    default:
      return state;
  }
};
