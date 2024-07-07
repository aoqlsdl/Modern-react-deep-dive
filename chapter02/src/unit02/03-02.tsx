// p.156-157 getDerivedStateFromError()를 이용한 에러 처리
// p.159-160 componentDidCatch를 이용한 에러 처리
import React, { PropsWithChildren, ErrorInfo } from 'react';

type Props = PropsWithChildren<{}>;
type State = { hasError: boolean; errorMessage: string };

export default class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			hasError: true,
			errorMessage: '',
		};
	}

	// error: 하위 컴포넌트에서 발생한 에러를 의미함
	// 하위 컴포넌트에서 에러가 발생했을 경우 어떻게 자식 리액트 컴포넌트를 렌더링할지
	// 결정하는 용도로 제공되는 메서드이므로 반드시 state값을 반환해야 함
	// 렌더링 과정에서 호출되는 메서드이므로 부수 효과를 발생시켜서는 안 됨
	// (console.error와 같은 작업 포함) => 이것은 componentDidCatch에서 사용할 것
	static getDerivedStateFromError(error: Error) {
		return {
			hasError: true,
			errorMessage: error.toString(),
		};
	}

	// getDerivedStateFromError()에서 하지 못했던 부수 효과를 수행할 수 있음
	// 에러 발생시 이 메서드에서 제공되는 에러 정보를 바탕으로 로깅하는 등의 용도로 사용 가능
	componentDidCatech(error: Error, info: ErrorInfo) {
		console.log(error);
		console.log(info);
	}

	render() {
		// 에러가 발생했을 경우 렌더링
		if (this.state.hasError) {
			return (
				<div>
					<h1>에러 발생</h1>
					<p>{this.state.errorMessage}</p>
				</div>
			);
		}

		// 일반적인 상황에서의 렌더링
		return this.props.children;
	}
}
