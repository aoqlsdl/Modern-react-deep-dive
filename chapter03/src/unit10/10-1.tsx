// p.234 useDebugValue를 사용하는 코드

import { useDebugValue, useState } from "react";

// 현재 시간을 반환하는 사용자 정의 훅
function useDate() {
  const date = new Date();

  // useDebugValue로 디버깅 정보 기록
  useDebugValue(date, (date) => `현재 시간: ${date.toISOString()}`);
  return date;
}

export default function App() {
  const date = useDate();
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((prev) => prev + 1);
  }

  return (
    <div className="App">
      <h1>
        {counter} {date.toISOString()}
      </h1>
      <button onClick={handleClick}></button>
    </div>
  );
}
