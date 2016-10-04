import { Moment } from 'moment';
import { TypedRecord, makeTypedFactory, recordify } from 'typed-immutable-record';
import { fromJS, Map, List } from 'immutable';

interface ITempRecord extends TypedRecord<ITempRecord>, ITemp {};
interface ITemp {
    minValue: number;
    maxValue: number;
}
export const createTemperature = makeTypedFactory<ITemp, ITempRecord>({
  minValue: 0,
  maxValue: 0
});

interface IWindRecord extends TypedRecord<IWindRecord>, IWind {};
interface IWind {
    speed: number;
    degree: number;
}
export const createWind = makeTypedFactory<IWind, IWindRecord>({
  speed: 0,
  degree: 0
});

export interface IEntryRecord extends TypedRecord<IEntryRecord>, IEntry {};
export interface IEntry {
    date: Moment;
    temp: ITempRecord;
    humidity: number;
    wind: IWindRecord;
    icon: string;
}

export const createEntry = makeTypedFactory<IEntry, IEntryRecord>({
  date: null,
  temp: createTemperature(),
  humidity: 0,
  wind: createWind(),
  icon: ''
});

export interface IWeatherRecord extends TypedRecord<IWeatherRecord>, IWeather {};
export interface IWeather {
    city: string;
    dataEntries: List<List<IEntry>>;
}

export const createWeather = makeTypedFactory<IWeather, IWeatherRecord>({
  city: 'London',
  dataEntries: List([])
});

export interface IAppStateRecord extends TypedRecord<IAppStateRecord>, IAppState {}
export interface IAppState {
  weather: IWeatherRecord;
  selectedTab: number;
}

export const initialState = {
  weather: createWeather(),
  selectedTab: 0
};
