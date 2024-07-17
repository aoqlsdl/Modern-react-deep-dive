import fetch from 'isomorphic-fetch';

export interface TodoResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export async function fetchTodo() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const result: TodoResponse[] = await response.json();
	return result;
}
