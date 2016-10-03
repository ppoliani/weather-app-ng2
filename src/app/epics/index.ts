import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';
import { WeatherEpics } from './weather.epics';

@Injectable()
export class Epics {
  constructor(private weatherEpics: WeatherEpics) { }

  get load() {
    return combineEpics(
      this.weatherEpics.fetchForecast
    );
  }
}
