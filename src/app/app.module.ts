import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WeatherApiService } from './shared/services/weather-api.service';
import { TransformationService } from './shared/services/transformation.service';
import { AppComponent } from './app.component';
import { TabSelectorComponent } from './components/tab-selector/tab-selector.component';
import { TabHeaderComponent } from './components/tab-header/tab-header.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';

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
    HttpModule
  ],
  providers: [
    WeatherApiService,
    TransformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
