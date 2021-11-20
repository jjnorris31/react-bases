import {useState} from "react";

interface Props {
  initialValue?: number
}

export const Counter = ({initialValue = 0} : Props) => {

  const [count, setCount] = useState(initialValue);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => {
        setCount(previous => previous + 1);
      }}>
        +1
      </button>
    </>
  )
}
