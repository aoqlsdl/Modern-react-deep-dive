// p.148 일반 함수로 선언된 메서드에서 this 바인딩 사용하기
import { Component } from 'react';

// 빈 props 선언
type Props = Record<string, never>;

interface State {
	count: number;
}

class SampleComponent extends Component<Props, State> {
	private constructor(props: Props) {
		super(props);
		this.state = { count: 1 };
		// handleClick의 this를 현재 클래스로 바인딩하기
		this.handleClick = this.handleClick.bind(this);
	}

	private handleClick() {
		this.setState(prev => ({ count: prev.count + 1 }));
	}

	public render() {
		const {
			state: { count },
		} = this;
		return (
			<div>
				<button onClick={this.handleClick}>증가</button>

				{/* 
            렌더링 함수 내부에서 함수를 새롭게 만들어 전달할 수도 있으나, 
            매번 렌더링이 일어날 때마다 새로운 함수를 생성해서 할당해야 하므로 지양
            */}
				{/* <button onClick={() => this.handleClick()}>증가</button> */}

				{count}
			</div>
		);
	}
}
