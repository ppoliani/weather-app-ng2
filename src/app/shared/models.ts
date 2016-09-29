import { Moment } from 'moment';

interface ITemp {
    min: number;
    max: number;
}

interface IWind {
    speed: number;
    degree: number;
}

export interface IEntry {
    date: Moment;
    temp: ITemp;
    humidity: number;
    wind: IWind;
    icon: string;
}

export interface IWeather {
    city: string;
    entries: Array<Array<IEntry>>;
}
