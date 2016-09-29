import { Component, OnInit } from '@angular/core';
import { IWeather } from './shared/models';
import WeatherApiService from './shared/services/weather-api.service';
import TransformationService from './shared/services/transformation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weather: IWeather;

  constructor(
    private weatherApiService: WeatherApiService,
    private transformationService: TransformationService
  ) {}

  ngOnInit() {
    this.weatherApiService.fetchForecast()
      .map(rawData => {
        this.weather = this.transformationService.transformData(rawData);
      })
  }
}
