import {useReducer} from "react";
import {CounterState} from "./interfaces/interfaces";
import {counterReducer} from "./reducer/counterReducer";
import {increaseBy} from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

export const CounterReducer = () => {

  const [{counter}, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleClick = () => {
    dispatch(increaseBy(10));
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}
