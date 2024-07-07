// p.151 - 153 Component vs. PureComponent
import React from 'react';

interface State {
	count: number;
}

type Props = Record<string, never>;

// state가 업데이트되는 대로 렌더링이 발생
export class ReactComponent extends React.Component<Props, State> {
	private renderCounter = 0;

	private constructor(props: Props) {
		super(props);
		this.state = {
			count: 1,
		};
	}

	private handleClick = () => {
		this.setState({ count: 1 });
	};

	public render() {
		console.log('ReactComponent', ++this.renderCounter);
		return (
			<h1>
				ReactComponent: {this.state.count}{' '}
				<button onClick={this.handleClick}>+</button>
			</h1>
		);
	}
}

// state의 값이 업데이트 되지 않아 렌더링이 일어나지 않음
// state값에 대해 얕은 비교를 수행하여 결과가 다를 때만 렌더링을 수행하므로.
export class ReactPureComponent extends React.PureComponent<Props, State> {
	private renderCounter = 0;

	private constructor(props: Props) {
		super(props);
		this.state = {
			count: 1,
		};
	}

	private handleClick = () => {
		this.setState({ count: 1 });
	};

	public render() {
		console.log('ReactPureComponent', ++this.renderCounter);
		return (
			<h1>
				ReactPureComponent: {this.state.count}{' '}
				<button onClick={this.handleClick}>+</button>
			</h1>
		);
	}
}

export default function CompareComponent() {
	return (
		<>
			<h2>React.Component</h2>
			<ReactComponent />
			<h2>React.PureComponent</h2>
			<ReactPureComponent />
		</>
	);
}
