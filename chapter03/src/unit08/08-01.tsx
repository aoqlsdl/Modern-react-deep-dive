// p. 230 forwardRef 사용 예제

import { forwardRef, useEffect, useRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  useEffect(() => {
    console.log(ref);
  });
  return <div>안녕!</div>;
});

function ParentComponent() {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef.current} />
      <ChildComponent ref={inputRef} />
    </>
  );
}
