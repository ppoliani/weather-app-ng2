import { createWeather } from '../data/models';
import { WeatherAction, ActionsEnum } from '../actions/weather.actions';

export function weatherReducer(state = createWeather(), action: WeatherAction) {
  switch(action.type) {
    case ActionsEnum.FetchWeatherForecast: return state;
    case ActionsEnum.FetchWeatherForecastSuccess: return state;
    case ActionsEnum.FetchWeatherForecastError: return state;
    default: const x: never = action;
  }
  return state;
}
