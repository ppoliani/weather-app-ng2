import { IWeatherRecord } from '../data/models';

interface FetchWeatherForecast {
  type: 'fetchWeatherForecast';
  payload: string; //maybe the query parameter
}

interface FetchWeatherForecastSuccess {
  type: 'fetchWeatherForecastSuccess';
  payload: IWeatherRecord;
}

interface FetchWeatherForecastError {
  type: 'fetchWeatherForecastError';
  payload: string;
}

export type WeatherActions = FetchWeatherForecast
  | FetchWeatherForecastSuccess
  | FetchWeatherForecastError;
