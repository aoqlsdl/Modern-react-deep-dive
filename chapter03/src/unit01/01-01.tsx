import { useState } from "react";

export default function App() {
    const [state, setState] = useState(() => {
        console.log('복잡한 연산 ... '); // 컴포넌트가 처음 구동될 때만 실행됨
        return 0;
    });

    function handleClick() {
        setState((prev) => prev + 1);
    };
    
    return(
        <></>
    )
}