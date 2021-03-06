import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherApiService {
  apiUrl: string;

  constructor(private http: Http) {
    this.apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=London&mode=json&units=metric&appid=6f46853eca80bc07f3262d493ca931d3';
  }

  fetchForecast = () =>
    this.http.get(`${this.apiUrl}`)
      .map(r => r.json());
}
