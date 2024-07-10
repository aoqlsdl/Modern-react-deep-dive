import { useEffect, useRef } from "react";

// p.217 useRef를 사용한 DOM 접근 예제
function RefComponent() {
    const inputRef = useRef();

    // 렌더링이 실행되기 전이므로 undefined 반환
    console.log(inputRef.current);

    useEffect(() => {
        console.log(inputRef.current) 
    }, [inputRef]);

    return <input ref={inputRef.current} type="text" />
}