import { Component, OnInit } from '@angular/core';
import { IWeather } from './data/models';
import { WeatherApiService } from './services/weather-api.service';
import { TransformationService } from './services/transformation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weather: IWeather;

  constructor(
    private weatherApiService: WeatherApiService,
    private transformationService: TransformationService
  ) {}

  ngOnInit() {
    this.weatherApiService.fetchForecast()
      .subscribe(rawData => {
        this.weather = this.transformationService.transformData(rawData);
      })
  }
}
