import {useState} from "react";

interface Props {
  initialValue?: number
}

interface CounterState {
  count: number,
  clicks: number
}

export const CounterBy = ({initialValue = 5} : Props) => {

  const [{count, clicks}, setCounterState] = useState<CounterState>({
    count: initialValue,
    clicks: 0
  });

  const handleClick = (numberToAdd: number) => {
    setCounterState(({count, clicks}) => ({
      count: count + numberToAdd,
      clicks: clicks + 1
    }));
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  )
}
