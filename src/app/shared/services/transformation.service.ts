import * as moment from 'moment';
import { IWeather, IEntry } from '../models';

export default class TransformationService {
  /**
   * Returns a tuple IEntry*Number including the index of the previous entry
   */
  getPrev = arr => arr.length >= 1 ? [arr[arr.length - 1], arr.length - 1] : undefined;

  isSameDay = (dayA, dayB) => dayA.isSame(dayB, 'day');

  sort = (entries: Array<IEntry>) => entries.sort((a, b) => a.date.diff(b.date));

  /**
   * Get the individual entries and group them into the day they belong
   */
  groupByDays = (entries: Array<IEntry>) =>
    entries.reduce(
      (acc, entry) => {
        const prevEntry = getPrev(acc);

        // similar to  fp pattern matching
        switch (prevEntry) {
          case undefined:
            acc.push([entry]);
            break;
          default:
            if (isSameDay(entry.date, prevEntry[0][0].date)) {
              acc[prevEntry[1]].push(entry);
            }
            else {
              acc.push([entry]);
            }
        }

        return acc;
      },
      []
    );

  transformList = ({list}) =>
    list.map(
      item => ({
        date: moment(item.dt_txt),
        temp: {
          min: Math.round(item.main.temp_min),
          max: Math.round(item.main.temp_max)
        },
        humidity: item.main.humidity,
        icon: item.weather[0].icon,
        wind: {
          speed: item.wind.speed,
          deg: item.wind.deg
        }
      })
    ) as Array<IEntry>;

  /**
   * Transforms the data we receive from the service to a data
   * structure that our app understands.
   */
  transformData = data => ({
    city: data.city.name,
    entries: this.groupByDays(this.sort(this.transformList(data)))
  }) as IWeather;
}
