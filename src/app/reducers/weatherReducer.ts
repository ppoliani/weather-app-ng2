import { createWeather } from '../data/models';

export function counterReducer(state = createWeather(), action:any) {
  return state;
}
