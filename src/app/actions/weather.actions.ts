import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IWeatherRecord, IAppStateRecord } from '../data/models';

type ActionType =
  'WEATHER::FETCH'
  | 'WEATHER::FETCH_SUCCESS'
  | 'WEATHER::FETCH_ERROR';

export const FETCH: ActionType = 'WEATHER::FETCH';
export const FETCH_SUCCESS: ActionType = 'WEATHER::FETCH_SUCCESS';
export const FETCH_ERROR: ActionType = 'WEATHER::FETCH_ERROR';

interface FetchWeatherForecast {
  type: ActionType;
  payload: string; //maybe the query parameter
}

interface FetchWeatherForecastSuccess {
  type: ActionType;
  payload: IWeatherRecord;
}

interface FetchWeatherForecastError {
  type: ActionType;
  payload: string;
}

export type WeatherAction =
    FetchWeatherForecast
    | FetchWeatherForecastSuccess
    | FetchWeatherForecastError;


@Injectable()
export class WeatherActions {
  constructor() {}

  fetchWeatherForecast(): WeatherAction {
    return {
      type: FETCH,
      payload: '',
    };
  }

  fetchWeatherSuccess(payload: IWeatherRecord): WeatherAction {
    return {
      type: FETCH_SUCCESS,
      payload
    };
  }

  fetchWeatherError(payload): WeatherAction {
    return {
      type: FETCH_ERROR,
      payload
    };
  }
}
