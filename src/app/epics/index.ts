import { combineEpics } from 'redux-observable';
import { WeatherEpics } from './weather.epics';

export class Epics {
  constructor(private weatherEpics: WeatherEpics) { }

  get load() {
    return combineEpics(
      this.weatherEpics.fetchForecast
    );
  }
}
