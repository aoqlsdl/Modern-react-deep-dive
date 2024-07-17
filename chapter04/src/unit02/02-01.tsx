// p.270 renderToString을 이용해 리액트 컴포넌트를 HTML 문자열로 만들기
import React, { useEffect } from 'react';
import ReactDomServer from 'react-dom/server';

function ChildComponent({ fruits }: { fruits: Array<string> }) {
	useEffect(() => {
		console.log(fruits);
	}, [fruits]);

	function handleClick() {
		console.log('hello');
	}

	return (
		<ul>
			{fruits.map(fruit => (
				<li key={fruit} onClick={handleClick}>
					{fruit}
				</li>
			))}
		</ul>
	);
}

function SampleComponent() {
	return (
		<>
			<div>hello</div>
			<ChildComponent fruits={['apple', 'banana', 'peach']} />
		</>
	);
}

const result = ReactDomServer.renderToString(
	React.createElement('div', { id: 'root' }, <SampleComponent />)
);
