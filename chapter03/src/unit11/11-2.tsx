import { ChangeEvent, memo, useEffect, useState } from "react";

// p.244 React.memo 사용 예제
const ChildComponent = memo(({ value }: { value: string }) => {
  useEffect(() => {
    console.log("렌더링!");
  });
  return <>안녕하세요! {value}</>;
});

// ParentComponent에서 아무리 state가 변경되어도 ChildComponent는 다시 렌더링되지 않음
// 클래스 컴포넌트의 PureComponent와 매우 유사함
export default function ParentComponent() {
  const [state, setState] = useState(1);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setState(Number(e.target.value));
  }

  return (
    <>
      <input type="number" value={state} onChange={handleChange} />
      <ChildComponent value="hello" />
    </>
  );
}
