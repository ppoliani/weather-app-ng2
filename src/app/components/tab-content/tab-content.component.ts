import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IEntry } from '../../data/models';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnChanges {
  @Input() dayEntries: Array<IEntry>;
  @Input() isSelected: boolean;

  readonly iconUri = 'http://openweathermap.org/img/w/';
  maxWidth: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dayEntries']) {
      this.maxWidth = `${100 / this.dayEntries.length}%`;
    }
  }
}
