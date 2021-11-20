import {useCounter} from "../hooks/useCounter";

export const CounterHook = () => {

  const {count, counterElement, handleClick} = useCounter({
    maxCount: 10
  });

  return (
    <>
      <h1>CounterEffect</h1>
      <h2 ref={counterElement}>{count}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  )
}
