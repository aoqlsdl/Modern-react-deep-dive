// p.179-180 리액트 컴포넌트 트리의 렌더링 과정을 살펴보기 위한 예제
import { useState } from 'react';

export default function A() {
	return (
		<div className="App">
			<h1>Hello React!</h1>
			<B />
		</div>
	);
}

function B() {
	const [counter, setCounter] = useState(0);

	function handleButtonClick() {
		setCounter(prev => prev + 1);
	}

	return (
		<>
			<label>
				<C number={counter} />
			</label>
			<button onClick={handleButtonClick}>+</button>
		</>
	);
}

function C({ number }: { number: number }) {
	return (
		<div>
			{number} <D />
		</div>
	);
}

function D() {
	return <>리액트 재밋당 ㅎㅎ</>;
}
