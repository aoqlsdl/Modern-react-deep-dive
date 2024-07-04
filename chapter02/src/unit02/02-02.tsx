import { createElement, PropsWithChildren } from 'react';

// props 여부에 따라 children 요소만 달라지는 경우
// 굳이 번거롭게 전체 내용을 삼항 연산자로 처리할 필요 없음
// 이 경우 불필요한 코드 중복 발생
function TextOrHeading1({
	isHeading,
	children,
}: PropsWithChildren<{ isHeading: boolean }>) {
	return isHeading ? (
		<h1 className="text">{children}</h1>
	) : (
		<span className="text">{children}</span>
	);
}

// 위의 코드를 리팩토링하기
// jsx가 변환되는 특성을 활용한다면 아래와 같이 간결하게 처리 가능
function TextOrHeading2({
	isHeading,
	children,
}: PropsWithChildren<{ isHeading: boolean }>) {
	return createElement(
		isHeading ? 'h1' : 'span',
		{ className: 'text' },
		children
	);
}
