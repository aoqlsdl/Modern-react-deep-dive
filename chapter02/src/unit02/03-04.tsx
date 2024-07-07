// p.168 함수 컴포넌트와 렌더링된 값
import React from 'react';

interface Props {
	user: string;
}

// 함수 컴포넌트로 구현한 setTimeout 예제
// 클릭했던 시점의 props 값을 기준으로 메시지가 뜸 -> 일반적인 개발자가 의도한 방향성
export function FunctionalComponent(props: Props) {
	const showMessage = () => {
		alert('Hello ' + props.user);
	};

	const handleClick = () => {
		setTimeout(showMessage, 3000);

		return <button onClick={handleClick}>Follow</button>;
	};
}

// 클래스 컴포넌트로 구현한 setTimeout 예제
// 3초 뒤에 변경된 props를 기준으로 메시지가 뜸
export class ClassComponent extends React.Component<Props, {}> {
	private showMessage = () => {
		// props의 값을 항상 this로부터 가져오는데,
		// 클래스 컴포넌트의 props는 외부에서 변경되지 않는 이상 불변값.
		// this가 가리키는 객체는 변경 가능한 값
		// 따라서 생명주기 메서드가 변경된 값을 읽을 수 있게 됨
		alert('Hello ' + this.props.user);
	};

	private handleClick = () => {
		setTimeout(this.showMessage, 3000);
	};

	public render() {
		return <button onClick={this.handleClick}>Follow</button>;
	}
}
