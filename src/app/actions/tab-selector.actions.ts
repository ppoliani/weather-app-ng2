import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { ITabSelectorRecord, IAppStateRecord } from '../data/models';

interface SelectTab {
  type: ActionsEnum.SelectTab;
  payload: number;
}

export enum ActionsEnum {
  SelectTab
}

export type TabSelectorAction = SelectTab;

@Injectable()
export class TabSelectorActions {
  constructor(private ngRedux: NgRedux<IAppStateRecord>) {}

  selectTab(index) {
    this.ngRedux.dispatch({ type: ActionsEnum.SelectTab, payload: index } as TabSelectorAction);
  }
}
