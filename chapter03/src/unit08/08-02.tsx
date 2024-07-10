import { forwardRef, useImperativeHandle, useRef, useState } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  // useImperativeHandle을 사용하면 ref의 동작을 추가로 정의할 수 있음
  useImperativeHandle(ref, () => ({ alert: () => alert(props.value) }), [
    props.value,
  ]);

  return <input {...props} ref={ref} />;
});

function App() {
  // input에 사용할 ref
  const inputRef = useRef<HTMLInputElement & { alert: () => void }>(null);

  // input의 value
  const [text, setText] = useState("");

  function handleClick() {
    // inputRef에 추가한 alert라는 동작을 사용할 수 있음
    if (inputRef.current) {
      inputRef.current.alert();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <>
      <Input ref={inputRef} value={text} onChange={handleChange} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
}

export default App;
