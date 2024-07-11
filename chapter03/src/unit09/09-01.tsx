import { useEffect, useLayoutEffect, useState } from "react";

// p.233 useEffect와 useLayoutEffect의 사용법 ㅂ비교
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect", count);
  }, [count]);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </>
  );
}
