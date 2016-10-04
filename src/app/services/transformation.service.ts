import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { createWeather, createEntry, createTemperature, createWind, IEntryRecord, IWeather } from '../data/models';

@Injectable()
export class TransformationService {
  /**
   * Returns a tuple IEntry*Number including the index of the previous entry
   */
  private getPrev = arr => arr.size >= 1 ? List(List([arr.get(arr.size - 1), arr.size - 1])) : undefined;

  private isSameDay = (dayA, dayB) => dayA.isSame(dayB, 'day');

  private sort = (entries: List<IEntryRecord>) => entries.sort((a, b) => a.date.diff(b.date)).toList();

  /**
   * Get the individual entries and group them into the day they belong
   */
  private groupByDays = (entries: List<IEntryRecord>) =>
    List<List<IEntryRecord>>(
      entries.reduce(
        (acc, entry) => {
          const prevEntry = this.getPrev(acc);

          // similar to  fp pattern matching
          switch (prevEntry) {
            case undefined:
              return acc.push(List([entry]));
            default:
              if (this.isSameDay(entry.date, prevEntry.getIn([0, 0]).date)) {
                return acc.updateIn(
                  [prevEntry.get(1)],
                  (e) => e.push(entry)
                )
              }
              else {
                return acc.push(List([entry]));
              }
          }
        },
        List(List([]))
      )
    );

  private transformList = ({list}) =>
    List<IEntryRecord>(
      list.map(
        item => createEntry({
          date: moment(item.dt_txt),
          temp: createTemperature({
            minValue: Math.round(item.main.temp_min),
            maxValue: Math.round(item.main.temp_max)
          }),
          humidity: item.main.humidity,
          icon: item.weather[0].icon,
          wind: createWind({
            speed: item.wind.speed,
            degree: item.wind.deg
          })
        })
      )
    );

  /**
   * Transforms the data we receive from the service to a data
   * structure that our app understands.
   */
  transformData = data =>
    createWeather({
      city: data.city.name,
      dataEntries: this.groupByDays(this.sort(this.transformList(data)))
    });

}
