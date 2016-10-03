import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import { IWeatherRecord } from './data/models';
import { Observable } from 'rxjs';
import { WeatherActions } from './actions/weather.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @select(['weather', 'dataEntries']) dataEntries: Observable<IWeatherRecord>;

  constructor(
    private weatherActions: WeatherActions
  ) {}

  ngOnInit() {
    this.weatherActions.fetchWeatherForecast();
  }
}
