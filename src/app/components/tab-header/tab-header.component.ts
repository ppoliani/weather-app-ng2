import { Component, Input, Output, EventEmitter } from '@angular/core';
import { List } from 'immutable';
import { IEntryRecord } from '../../data/models';

@Component({
  selector: 'tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss']
})
export class TabHeaderComponent {
  @Input() index: number;
  @Input() dayEntries: List<IEntryRecord>;
  @Input() isSelected: boolean;

  private iconUri: string;

  constructor() {
    this.iconUri = 'http://openweathermap.org/img/w/';
  }

  selectTab() {

  }

  getIcon() {
    return this.dayEntries ? `${this.iconUri}/${this.dayEntries[0].icon}.png`: '';
  }

  findMinTemp() {
    return Math.min(...this.dayEntries.map(e => e.getIn['temp', 'maxValue']).toArray());
  }

  findMaxTemp() {
    return Math.max(...this.dayEntries.map(e => e.getIn['temp', 'maxValue']).toArray());
  }
}
