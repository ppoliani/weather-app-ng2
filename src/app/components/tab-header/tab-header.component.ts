import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEntry } from '../../shared/models';

@Component({
  selector: 'tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss']
})
export class TabHeaderComponent {
  @Input() index: number;
  @Input() dayEntries: Array<IEntry>;
  @Input() isSelected: boolean;
  @Output() onTabSelected = new EventEmitter<number>();

  iconUri: string;

  constructor() {
    this.iconUri = 'http://openweathermap.org/img/w/';
  }

  selectTab() {
    this.onTabSelected.emit(this.index);
  }

  getIcon() {
    return this.dayEntries ? `${this.iconUri}/${this.dayEntries[0].icon}.png`: '';
  }

  findMinTemp() {
    return Math.min(...(this.dayEntries.map(e => e.temp.max)));
  }

  findMaxTemp() {
    return Math.max(...(this.dayEntries.map(e => e.temp.max)));
  }
}
