import { Moment } from 'moment';
import { TypedRecord, makeTypedFactory, recordify } from 'typed-immutable-record';
import { fromJS, Map, List } from 'immutable';

interface ITempRecord extends TypedRecord<ITempRecord>, ITemp {};
interface ITemp {
    minValue: number;
    maxValue: number;
}
const createTemperature = makeTypedFactory<ITemp, ITempRecord>({
  minValue: 0,
  maxValue: 0
});

interface IWindRecord extends TypedRecord<IWindRecord>, IWind {};
interface IWind {
    speed: number;
    degree: number;
}
const createWind = makeTypedFactory<IWind, IWindRecord>({
  speed: 0,
  degree: 0
});

interface IEntryRecord extends TypedRecord<IEntryRecord>, IEntry {};
export interface IEntry {
    date: Moment;
    temp: ITemp;
    humidity: number;
    wind: IWind;
    icon: string;
}

export const createEntry = makeTypedFactory<IEntry, IEntryRecord>({
  date: null,
  temp: createTemperature(),
  humidity: 0,
  wind: createWind(),
  icon: ''
});

interface IWeatherRecord extends TypedRecord<IWeatherRecord>, IWeather {};
export interface IWeather {
    city: string;
    dataEntries: List<List<IEntry>>;
}

export const createWeather = makeTypedFactory<IWeather, IWeatherRecord>({
  city: 'London',
  dataEntries: List([])
});

interface ITabSelectorDataRecord extends TypedRecord<ITabSelectorDataRecord>, ITabSelectorData {}
interface ITabSelectorData {
  selectedTab: number;
}

export const creatTabSelectorData = makeTypedFactory<ITabSelectorData, ITabSelectorDataRecord>({
  selectedTab: 0
});

export interface IAppStateRecord extends TypedRecord<IAppStateRecord>, IAppState {}
export interface IAppState {
  data: IWeatherRecord;
  selectedTab: ITabSelectorDataRecord;
}

export const initialState: IAppStateRecord = recordify<IAppState, IAppStateRecord>({
  data: createWeather(),
  selectedTab: creatTabSelectorData()
});
