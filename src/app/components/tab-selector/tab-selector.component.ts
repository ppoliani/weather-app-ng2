import { Component, Input } from '@angular/core';
import { IEntry } from '../../data/models';

@Component({
  selector: 'tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.scss']
})
export class TabSelectorComponent {
  @Input() entries: Array<Array<IEntry>>;

  selectedIndex = 0;

  onTabSelected(index) {
    this.selectedIndex = index;
  }

  isSelected(index) {
    return this.selectedIndex === index;
  }
}
