import { creatTabSelectorData} from '../data/models';
import { TabSelectorAction, ActionsEnum } from '../actions/tab-selector.actions';

export function tabSelectorReducer(state = creatTabSelectorData(), action: TabSelectorAction) {
  switch(action.type) {
    case ActionsEnum.SelectTab: return state.set('selectTab', action.payload);
    default: state;
  }
}
