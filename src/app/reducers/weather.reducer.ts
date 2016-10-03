import { createWeather } from '../data/models';
import { WeatherAction, FETCH, FETCH_SUCCESS, FETCH_ERROR } from '../actions/weather.actions';

export function weatherReducer(state = createWeather(), action: WeatherAction) {
  switch(action.type) {
    case FETCH_SUCCESS: return action.payload;
    case FETCH_ERROR: return state;
  }
  return state;
}
