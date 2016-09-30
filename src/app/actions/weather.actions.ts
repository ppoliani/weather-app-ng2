import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IWeatherRecord, IAppStateRecord } from '../data/models';

interface FetchWeatherForecast {
  type: ActionsEnum.FetchWeatherForecast;
  payload: string; //maybe the query parameter
}

interface FetchWeatherForecastSuccess {
  type: ActionsEnum.FetchWeatherForecastSuccess;
  payload: IWeatherRecord;
}

interface FetchWeatherForecastError {
  type: ActionsEnum.FetchWeatherForecastError;
  payload: string;
}

export enum ActionsEnum {
  FetchWeatherForecast,
  FetchWeatherForecastSuccess,
  FetchWeatherForecastError
}

export type WeatherAction =
  FetchWeatherForecast
  | FetchWeatherForecastSuccess
  | FetchWeatherForecastError;


@Injectable()
export class WeatherActions {
  constructor(private ngRedux: NgRedux<IAppStateRecord>) {}

  fetchWeatherForecast() {
    this.ngRedux.dispatch({
      type: ActionsEnum.FetchWeatherForecast,
      payload: '',
    } as WeatherAction);
  }

  fetchWeatherSucces(payload: IWeatherRecord) {
    this.ngRedux.dispatch({
      type: ActionsEnum.FetchWeatherForecastSuccess,
      payload
    } as WeatherAction);
  }

  fetchWeatherError(payload) {
    this.ngRedux.dispatch({
      type: ActionsEnum.FetchWeatherForecastError,
      payload
    } as WeatherAction);
  }
}
