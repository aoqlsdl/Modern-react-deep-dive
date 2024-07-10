// p.216 useRef의 잘못된 사용 예시 
import { useRef } from "react";

function RefComponent() {
    const count = useRef(0);

    function handleClick() {
        count.current +=1;
    }

    // 버튼을 아무리 눌러도 변경된 count값이 렌더링되지 않음
    return <button onClick={handleClick}>{count.current}</button>
}


// useRef를 사용하지 않고 고정된 값을 관리하기
// 렌더링 이전에 값이 선언되므로 메모리 영역을 불필요하게 차지함
let value = 0;
function Component() {
    function handleClick() {
        value += 1;
    }

    return <button onClick={handleClick}>{value}</button>
}