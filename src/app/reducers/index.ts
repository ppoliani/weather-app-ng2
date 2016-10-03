import { combineReducers } from 'redux';
import { IAppStateRecord } from '../data/models';
import { weatherReducer } from '../reducers/weather.reducer';
import { tabSelectorReducer } from '../reducers/tab-selector.reducer';


export const rootReducer = combineReducers<IAppStateRecord>({
  weather: weatherReducer,
  selectedTab: tabSelectorReducer
});
