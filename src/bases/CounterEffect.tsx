import {useLayoutEffect, useRef, useState} from "react";
import {gsap} from 'gsap';
const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {

  const [count, setCount] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  let handleClick = () => {
    setCount(count => count < MAXIMUM_COUNT ? count + 1 : count);
  }

  useLayoutEffect(() => {
    if (count < 10) return;
    const tl = gsap.timeline();
    tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
      .to('h2', {y: 0, duration: 0.2, ease: 'bounce.out'});
  }, [count]);

  return (
    <>
      <h1>CounterEffect</h1>
      <h2 ref={counterElement}>{count}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  )
}
