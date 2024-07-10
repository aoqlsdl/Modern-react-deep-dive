import {
  ChangeEvent,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const MyContext = createContext<{ hello: string } | undefined>(undefined);

function ContextProvider({
  children,
  text,
}: PropsWithChildren<{ text: string }>) {
  return (
    <MyContext.Provider value={{ hello: text }}>{children}</MyContext.Provider>
  );
}

function useMyContext() {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error(
      "useMyContext는 ContextProvider 내부에서만 사용할 수 있습니다.",
    );
  }

  return context;
}

function GrandChildComponent() {
  const { hello } = useMyContext();
  useEffect(() => {
    console.log("렌더링 GrandChildComponent");
  });

  return <>{hello}</>;
}

function ChildComponent() {
  useEffect(() => {
    console.log("렌더링 ChildComponent");
  });

  return <GrandChildComponent />;
}

export default function ParentComponent() {
  const [text, setText] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  useEffect(() => {
    console.log("렌더링 ParentComponent");
  });

  return (
    <>
      <ContextProvider text="react">
        <input value={text} onChange={handleChange} />
        <ChildComponent />
      </ContextProvider>
    </>
  );
}
