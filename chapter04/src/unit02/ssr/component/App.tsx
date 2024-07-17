import { useEffect } from 'react';

import { TodoResponse } from '../fetch/fetch';

import { Todo } from './Todo';

export default function App({ todos }: { todos: Array<TodoResponse> }) {
	useEffect(() => {
		console.log('하이!');
	}, []);

	return (
		<>
			<h1>나의 할 일!</h1>
			<ul>
				{todos.map((todo, idx) => (
					<Todo key={idx} todo={todo} />
				))}
			</ul>
		</>
	);
}
