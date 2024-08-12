import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<header className="App-header">
				<img src={reactLogo} alt="react-logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					href="https://reactjs.org"
					className="App-link"
					target="_blank"
					ref="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
