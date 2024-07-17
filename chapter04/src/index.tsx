// p.279 서버 사이드 렌더링 프로젝트
import { hydrate } from 'react-dom';

import App from './unit02/ssr/component/App';
import { fetchTodo } from './unit02/ssr/fetch/fetch';

async function main() {
	const result = await fetchTodo();

	const app = <App todos={result} />;
	const el = document.getElementById('root');

	hydrate(app, el);
}

main();
