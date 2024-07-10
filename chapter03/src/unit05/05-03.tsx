import { useEffect, useRef, useState } from "react";

function usePrevious(value:number) {
    const ref = useRef<number>();
    useEffect(() => {
        ref.current = value
    }, [value]);
    return ref.current;
}

function SomeComponent() {
    const [counter, setCounter] = useState(0);
    const previousCounter = usePrevious(counter);

    function handleClick() {
        setCounter((prev) => prev + 1);
    }

    return (
        <button onClick={handleClick}>
            {counter} {previousCounter}
        </button>
    )
}