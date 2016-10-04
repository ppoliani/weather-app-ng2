import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { List } from 'immutable';
import { IWeatherRecord, IAppStateRecord } from './data/models';
import { Observable } from 'rxjs';
import { WeatherActions, WeatherAction } from './actions/weather.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @select(['weather', 'dataEntries']) dataEntries$: Observable<List<IWeatherRecord>>;

  constructor(
    private ngRedux: NgRedux<IAppStateRecord>,
    private weatherActions: WeatherActions
  ) {}

  ngOnInit() {
    this.ngRedux.dispatch<WeatherAction>(this.weatherActions.fetchWeatherForecast());
  }
}
