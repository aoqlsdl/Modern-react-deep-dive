import Image from 'next/image';
import styles from './page.module.css';
import { Component, ComponentType, memo } from 'react';
import AnonymousDefaultComponent from './_components/Component3';

function Component1() {
	return <>Component1</>;
}

const Component2 = () => {
	return <>Component2</>;
};

const MemoizedComponent = memo(() => <>MemorizedComponent</>);

const withSampleHOC = (Component: ComponentType) => {
	return function () {
		return <Component />;
	};
};

const HOCComponent = withSampleHOC(() => <>HOCComponent</>);

export default function Home() {
	return (
		<main>
			<Component1 />
			<Component2 />
			<AnonymousDefaultComponent />
			<MemoizedComponent />
			<HOCComponent />
		</main>
	);
}
