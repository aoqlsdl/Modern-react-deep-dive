import { forwardRef, useImperativeHandle, useRef, useState } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      ...(inputRef.current as HTMLInputElement),
      alert: () => alert(props.value),
    }),
    [props.value],
  );

  return <input {...props} ref={inputRef} />;
});

function App() {
  const inputRef = useRef<HTMLInputElement & { alert: () => void }>(null);

  const [text, setText] = useState("");

  function handleClick() {
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
      <button onClick={handleClick}>Alert</button>
    </>
  );
}

export default App;
