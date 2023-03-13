import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 200) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("ahi vamos....");
  }
  return `${ iterationNumber } iteracciones`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>{" "}
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
