import { TabSelectorAction, SELECT_TAB } from '../actions/tab-selector.actions';

export function tabSelectorReducer(state = 0, action: TabSelectorAction) {
  switch(action.type) {
    case SELECT_TAB: return action.payload;
  }

  return state;
}
