import { Injectable } from '@angular/core';
import { IAppStateRecord } from '../data/models';

type ActionType = 'TAB::SELECT';

export const SELECT_TAB: ActionType = 'TAB::SELECT';

interface SelectTab {
  type: ActionType;
  payload: number;
}

export type TabSelectorAction = SelectTab;

@Injectable()
export class TabSelectorActions {
  constructor() {}

  selectTab(index): TabSelectorAction {
    return { type: SELECT_TAB, payload: index };
  }
}
