import { creatTabSelectorData} from '../data/models';
import { TabSelectorAction } from '../actions/tab-selector.actions';

export function tabSelectorReducer(state = creatTabSelectorData(), action: TabSelectorAction) {
  switch(action.type) {
    case 'selectTab': return state.set('selectTab', action.payload);
    default: state;
  }
}
