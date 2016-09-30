import { combineReducers } from 'redux';
import { IAppStateRecord } from '../data/models';
import { weatherReducer } from '../reducers/weatherReducer';
import { tabSelectorReducer } from '../reducers/tabSelectorReducer';


export const rootReducer = combineReducers<IAppStateRecord>({
  weather: weatherReducer
});
