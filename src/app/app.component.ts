import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { IWeatherRecord, IAppStateRecord } from './data/models';
import { Observable } from 'rxjs';
import { WeatherActions, WeatherAction } from './actions/weather.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @select(['weather', 'dataEntries']) dataEntries: Observable<IWeatherRecord>;

  constructor(
    private ngRedux: NgRedux<IAppStateRecord>,
    private weatherActions: WeatherActions
  ) {}

  ngOnInit() {
    this.ngRedux.dispatch<WeatherAction>(this.weatherActions.fetchWeatherForecast());
  }
}
