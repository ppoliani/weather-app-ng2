import { ITabSelectorRecord } from '../data/models';

interface SelectTab {
  type: 'selectTab';
  payload: number;
}

export type TabSelectorAction = SelectTab;
