import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import { ActionsEnum, WeatherActions } from '../actions/weather.actions';
import { TransformationService } from '../services/transformation.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherEpics {
  private readonly apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=London&mode=json&units=metric&appid=6f46853eca80bc07f3262d493ca931d3';

  constructor(
    private http: Http,
    private transformationService:  TransformationService,
    private weatherActions: WeatherActions
  ) {}

  fetchForecast = (actions$: ActionsObservable<any>) =>
    actions$.ofType(ActionsEnum.FetchWeatherForecast)
      .switchMap(() =>
        this.http.get(`${this.apiUrl}`)
          .map(r => this.weatherActions.fetchWeatherSucces(this.transformationService.transformData(r.json())))
          .catch(error => Observable.of(this.weatherActions.fetchWeatherError(error.message)))
      );

}
