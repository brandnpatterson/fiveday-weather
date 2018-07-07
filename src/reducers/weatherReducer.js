import { GET_WEATHER } from '../actions/types';

const initialState = {
  cities: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        cities: [...state.cities, action.payload]
      };
    default:
      return state;
  }
};
