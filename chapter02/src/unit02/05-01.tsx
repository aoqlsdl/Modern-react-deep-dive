import { useEffect, useMemo, useState } from 'react';

// p.186-187 useMemo, useCallback
// 인수로 넘겨주는 값이 변하지 않는 이상 같은 값을 가지고 있어야 하는데,
// 실제로 handleClick으로 렌더링 발생시켜보면 console.log가 출력되는 것을 볼 수 있음
// -> 함수 컴포넌트인 App이 호출되면서 useMath가 계속해서 호출되고,
// 객체 내부의 값은 같지만 참조가 변경되기 때문
function useMath(number: number) {
	const [double, setDouble] = useState(0);
	const [triple, setTriple] = useState(0);

	useEffect(() => {
		setDouble(number * 2);
		setTriple(number * 3);
	}, [number]);

	// return { double, triple };

	// useMath의 반환값을 useMemo로 감싼다면 값이 변경되지 않는 한 같은 결과물을 가질 수 있고
	// 그 덕분에 사용하는 쪽에서도 참조의 투명성을 유지할 수 있게 됨
	// 즉, 컴포넌트 자신의 리렌더링 뿐만 아니라 이를 사용하는 쪽에서도 변하지 않는
	// 고정된 값을 사용할 수 있다는 믿음을 줄 수 있음
	return useMemo(() => ({ double, triple }), [double, triple]);
}

export default function App() {
	const [counter, setCounter] = useState(0);
	const value = useMath(10);

	useEffect(() => {
		console.log(value.double, value.triple);
	}, [value]); // 값이 실제로 변하지 않았음에도 계속해서 console.log가 출력됨

	function handleClick() {
		setCounter(prev => prev + 1);
	}

	return (
		<>
			<h1>{counter}</h1>
			<button onClick={handleClick}>+</button>
		</>
	);
}
