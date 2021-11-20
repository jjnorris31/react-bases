import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export const useCounter = ({maxCount = 1}) => {
  const [count, setCount] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);
  const tl = useRef(gsap.timeline());

  let handleClick = () => {
    setCount(count => count < maxCount ? count + 1 : count);
  }

  useLayoutEffect(() => {
    if (!counterElement.current) return;

    tl.current.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
      .to('h2', {y: 0, duration: 0.2, ease: 'bounce.out'}).pause();
  })

  useEffect(() => {
    if (count < 10) return;
    tl.current.play(0);
  }, [count]);

  return {
    count, counterElement, handleClick
  }
}
