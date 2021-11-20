import {CounterState} from "../interfaces/interfaces";
import {CounterAction} from "../actions/actions";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'reset':
      return {
        changes: 0, counter: 0, previous: 0
      };
    case 'increaseBy':
      return {
        changes: 0, counter: state.counter + action.payload.value, previous: state.counter
      }
    default:
      return state;
  }
}
