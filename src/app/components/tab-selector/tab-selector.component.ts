import { Component, Input } from '@angular/core';
import { IEntry } from '../../shared/models';

@Component({
  selector: 'tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.scss']
})
class TabSelector {
  @Input() entries: Array<Array<IEntry>>;
}
