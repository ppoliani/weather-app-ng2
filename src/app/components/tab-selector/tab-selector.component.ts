import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { TabSelectorActions } from '../../actions/tab-selector.actions';
import { IEntryRecord, IAppStateRecord } from '../../data/models';

@Component({
  selector: 'tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabSelectorComponent implements OnInit {
  @Input() entries: List<List<IEntryRecord>>;
  @select('selectedTab') selectedIndex$: Observable<number>;

  selectedIndex = 0;

  constructor(
    private tabActions: TabSelectorActions,
    private ngRedux: NgRedux<IAppStateRecord>
  ) {}

  onTabSelected(index) {
    this.ngRedux.dispatch(this.tabActions.selectTab(index));
  }

  ngOnInit() {
    this.selectedIndex$.subscribe(i => this.selectedIndex = i);
  }

  isSelected(index) {
    return this.selectedIndex === index;
  }
}
