import { createWeather } from '../data/models';
import { WeatherActions } from '../actions/weather.actions';

export function weatherReducer(state = createWeather(), action: WeatherActions) {
  switch(action.type) {
    case 'fetchWeatherForecast': return state;
    case 'fetchWeatherForecastSuccess': return state;
    case 'fetchWeatherForecastError': return state;
    default: const x: never = action;
  }
  return state;
}
