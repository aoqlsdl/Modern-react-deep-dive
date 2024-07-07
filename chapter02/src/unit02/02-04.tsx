// p.145 클래스 컴포넌트 예제
import React from 'react';

// props 타입 선언
// 컴포넌트에 특정 속성을 전달하는 용도
interface SampleProps {
	required?: boolean;
	text: string;
}

// state 타입 선언
// 클래스 컴포넌트 내에서 관리하는 값으로, 이 값은 항상 객체여야 함
// 값에 변화가 있을 때마다 리렌더링이 발생함
interface SampleState {
	count: number;
	isLimited?: boolean;
}

// Component에 제네릭으로 props, state를 순서대로 삽입
class SampleComponent extends React.Component<SampleProps, SampleState> {
	// constructor에서 props를 넘겨주고, state의 기본값 설정
	// 컴포넌트가 초기화되는 시점에 호출됨
	private constructor(props: SampleProps) {
		// 컴포넌트를 만들면서 상속받은 상위 컴포넌트의 생성자 함수를 먼저 호출하여 접근
		super(props);
		this.state = {
			count: 0,
			isLimited: false,
		};
	}

	// render 내부에서 쓰일 함수 선언(메서드)
	// 보통 DOM에서 발생하는 이벤트와 함께 사용
	private handleClick = () => {
		const newValue = this.state.count + 1;
		this.setState({ count: newValue, isLimited: newValue >= 10 });
	};

	// render에서 컴포넌트가 렌더링할 내용 정의
	public render() {
		// props와 state 값을 this, 즉 해당 클래스에서 꺼내기
		const {
			props: { required, text },
			state: { count, isLimited },
		} = this;

		return (
			<h2>
				Sample Component
				<div>{required ? '필수' : '필수 아님'}</div>
				<div>문자: {text}</div>
				<div>count: {count}</div>
				<button onClick={this.handleClick} disabled={isLimited}>
					증가
				</button>
			</h2>
		);
	}
}
