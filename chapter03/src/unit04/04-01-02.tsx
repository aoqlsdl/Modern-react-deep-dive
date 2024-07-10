import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";

type Props = {
    name: string,
    value: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const ChildComponent = memo(({name, value, onChange}: Props) => {
    // 렌더링이 수행되는지 확인
    useEffect(() => {
        console.log('rendering!', name);
    });

    return (
        <>
            <h1>
                {name} {value ? '켜짐':'꺼짐'}
            </h1>
            <button onClick={(e) => onChange}>toggle</button>
        </>
    )
})

export default function App() {
    const [status1, setStatus1] = useState(false);
    const [status2, setStatus2] = useState(false);

    // 함수 재생성을 막기 위해 useCallback 사용
    const toggle1 = useCallback(
        function toggle1() {
            setStatus1(!status1);
        }, 
        [status1]
    )

    const toggle2 = useCallback(
        function toggle1() {
            setStatus2(!status2);
        }, 
        [status2]
    )

    return (
        <>
            <ChildComponent name="1" value={status1} onChange={toggle1} />
            <ChildComponent name="2" value={status2} onChange={toggle2} />
        </>
    )
}