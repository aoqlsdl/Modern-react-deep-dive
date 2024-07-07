// p.166-167 아주 간단한 함수 컴포넌트 예제
import { useState } from 'react';

type SampleProps = {
	required?: boolean;
	text: string;
};

// 앞서 작성한 클래스 컴포넌트보다 확실히 간결해짐
// render 내부에서 필요한 함수를 선언할 때 this 바인딩을 조심할 필요 없음
// state는 객체가 아닌 각각의 원시값으로 관리되어 사용하기 훨씬 편리해짐
// return에서도 굳이 this를 사용하지 않고 props와 state에 접근할 수 있게 됨
export function SampleComponent({ required, text }: SampleProps) {
	const [count, setCount] = useState<number>(0);
	const [isLimited, setIsLimited] = useState<boolean>(false);

	function handleClick() {
		const newValue = count + 1;
		setCount(newValue);
		setIsLimited(newValue >= 10);
	}

	return (
		<h2>
			Sample Component
			<div>{required ? '필수' : '필수 아님'}</div>
			<div>문자: {text}</div>
			<div>count: {count}</div>
			<button onClick={handleClick} disabled={isLimited}>
				증가
			</button>
		</h2>
	);
}
