import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEntry } from '../../shared/models';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss']
})
export class TabHeaderComponent {
  @Input() index: number;
  @Input() dayEntries: Array<IEntry>;
  @Input() isSelected: boolean;
  @Output() onTabSelected = new EventEmitter<number>();

  iconUri: string;
  iconSrc: string;

  constructor() {
    this.iconUri = 'http://openweathermap.org/img/w/';
    this.iconSrc = `${this.iconUri}/${this.dayEntries[0].icon}.png`;
  }

  selectTab() {
    this.onTabSelected.emit(this.index);
  }

  findMinTemp() {
    return Math.min(...(this.dayEntries.map(e => e.temp.max)));
  }

  findMaxTemp() {
    return Math.max(...(this.dayEntries.map(e => e.temp.max)));
  }
}
