import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { rootReducer } from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import { environment } from '../environments/environment';
const createLogger = require('redux-logger');

import { IAppState, initialState } from './data/models';
import { TransformationService } from './services/transformation.service';
import { AppComponent } from './app.component';
import { TabSelectorComponent } from './components/tab-selector/tab-selector.component';
import { TabHeaderComponent } from './components/tab-header/tab-header.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { Epics } from './epics';
import { TabSelectorActions } from './actions/tab-selector.actions';
import { WeatherActions } from './actions/weather.actions';
import { WeatherEpics } from './epics/weather.epics';

@NgModule({
  declarations: [
    AppComponent,
    TabSelectorComponent,
    TabHeaderComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    TabSelectorActions,
    WeatherActions,
    Epics,
    WeatherEpics,
    TransformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension,
    private epics: Epics
  ) {
    let enhancers = [];

    if(!environment.production && devTools.isEnabled()) {
      enhancers = [this.devTools.enhancer()]
    }

    ngRedux.configureStore(
      rootReducer,
      initialState,
      [createLogger(), createEpicMiddleware(epics.load)],
      enhancers
    );
  }
}
